import type { VercelRequest, VercelResponse } from "@vercel/node";

const GITHUB_USER = "chiaraberti13";
const MAX_PINNED = 6;

const PROJECT_EXCLUSIONS = new Set([
  "dichiarazioni_php",
  "dichiarazioni",
  "chiaraberti13",
  "mywebsite",
]);

type GitHubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics?: string[];
  archived: boolean;
  fork: boolean;
  updated_at: string;
};

type ProjectCategory =
  | "cybersecurity"
  | "interactive-labs"
  | "sdr-radio"
  | "automation-utilities";

type PublicRepo = {
  name: string;
  description: string | null;
  url: string;
  homepage: string | null;
  language: string | null;
  stars: number;
  forks: number;
  topics: string[];
  category: ProjectCategory;
  categories: ProjectCategory[];
  archived: boolean;
  fork: boolean;
  updatedAt: string;
};

function githubHeaders(token?: string): Record<string, string> {
  return {
    Accept: "application/vnd.github+json",
    "User-Agent": "chiaraberti-portfolio",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

const REPO_FILTER_CATEGORIES: Record<string, ProjectCategory[]> = {
  "aegis-nexus": ["interactive-labs", "cybersecurity"],
  "osi-cyber-explorer": ["interactive-labs", "cybersecurity"],
  "comptia-security-sy0-701": ["interactive-labs", "cybersecurity"],
  "olympus-security": ["interactive-labs", "cybersecurity"],
  "osmotetraubuntu": ["sdr-radio"],
  "tetraearubuntu": ["sdr-radio"],
  "utility-forge": ["automation-utilities"],
};

function filterCategories(repo: GitHubRepo): ProjectCategory[] {
  return REPO_FILTER_CATEGORIES[repo.name.toLowerCase()] ?? [];
}

function classifyRepo(repo: GitHubRepo): ProjectCategory {
  const name = repo.name.toLowerCase();
  const explicit = filterCategories(repo)[0];
  if (explicit) return explicit;

  const haystack = [
    repo.name,
    repo.description ?? "",
    ...(repo.topics ?? []),
  ]
    .join(" ")
    .toLowerCase();

  if (/(sdr|software[- ]defined radio|radio|tetra|osmo)/.test(haystack)) {
    return "sdr-radio";
  }

  if (/(comptia|ccna|exam|quiz|trainer|learning[- ]platform|study|education|interactive|lab)/.test(haystack)) {
    return "interactive-labs";
  }

  if (/(cyber|security|pentest|penetration|honeypot|soc|threat|osint|vulnerab|red[- ]team|blue[- ]team|detection|ioc)/.test(haystack)) {
    return "cybersecurity";
  }

  return "automation-utilities";
}

async function pinnedFromGraphQL(token: string): Promise<string[]> {
  const query = `
    query PinnedRepositories($login: String!) {
      user(login: $login) {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository { name }
          }
        }
      }
    }
  `;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "User-Agent": "chiaraberti-portfolio",
    },
    body: JSON.stringify({ query, variables: { login: GITHUB_USER } }),
  });

  if (!response.ok) throw new Error(`GitHub GraphQL: ${response.status}`);
  const payload = (await response.json()) as {
    data?: { user?: { pinnedItems?: { nodes?: Array<{ name?: string } | null> } } };
    errors?: unknown[];
  };
  if (payload.errors?.length) throw new Error("GitHub GraphQL returned errors");

  return (payload.data?.user?.pinnedItems?.nodes ?? [])
    .map((node) => node?.name?.trim() ?? "")
    .filter(Boolean)
    .slice(0, MAX_PINNED);
}

function uniqueRepoNames(section: string): string[] {
  const escaped = GITHUB_USER.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const repoHref = new RegExp(
    `href=["']\\/${escaped}\\/([A-Za-z0-9_.-]+)(?:["'#?\\/])`,
    "gi",
  );
  const names: string[] = [];
  let match: RegExpExecArray | null;

  while ((match = repoHref.exec(section)) !== null) {
    const name = match[1];
    if (name && !names.some((item) => item.toLowerCase() === name.toLowerCase())) {
      names.push(name);
      if (names.length === MAX_PINNED) break;
    }
  }
  return names;
}

async function pinnedFromPublicProfile(): Promise<string[]> {
  const response = await fetch(`https://github.com/${GITHUB_USER}`, {
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; chiaraberti-portfolio/1.0)",
      "Accept-Language": "en-US,en;q=0.9",
    },
  });
  if (!response.ok) throw new Error(`GitHub profile: ${response.status}`);

  const html = await response.text();
  const specificMarkers = [
    html.search(/pinned-item-list-item/i),
    html.search(/js-pinned-items-reorder-container/i),
  ].filter((index) => index >= 0);
  const genericMarker = html.search(/>\s*Pinned\s*</i);
  if (!specificMarkers.length && genericMarker < 0) return [];

  const start = specificMarkers.length ? Math.min(...specificMarkers) : genericMarker;
  const endCandidates = [
    html.indexOf("Contribution activity", start),
    html.indexOf("contribution-activity", start),
    html.indexOf('data-tab-item="repositories"', start),
  ].filter((index) => index > start);
  const end = endCandidates.length ? Math.min(...endCandidates) : Math.min(html.length, start + 120_000);

  return uniqueRepoNames(html.slice(start, end));
}

async function listOwnedRepos(token?: string): Promise<GitHubRepo[]> {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&type=owner&sort=updated`,
    { headers: githubHeaders(token) },
  );
  if (!response.ok) throw new Error(`GitHub REST: ${response.status}`);
  return (await response.json()) as GitHubRepo[];
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  res.setHeader("Cache-Control", "no-store, max-age=0");
  res.setHeader("CDN-Cache-Control", "no-store");
  res.setHeader("Vercel-CDN-Cache-Control", "no-store");
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  const token = process.env.GITHUB_TOKEN?.trim();

  try {
    const rawScope = Array.isArray(req.query.scope) ? req.query.scope[0] : req.query.scope;
    const scope = rawScope === "projects" ? "projects" : "pinned";

    let pinnedNames: string[] = [];

    if (token) {
      try {
        pinnedNames = await pinnedFromGraphQL(token);
      } catch {
        pinnedNames = [];
      }
    }

    if (!pinnedNames.length) {
      try {
        pinnedNames = await pinnedFromPublicProfile();
      } catch {
        pinnedNames = [];
      }
    }

    if (scope === "pinned" && !pinnedNames.length) {
      return res.status(502).json({ error: "Pinned repositories unavailable" });
    }

    const repos = await listOwnedRepos(token);
    const byName = new Map(repos.map((repo) => [repo.name.toLowerCase(), repo]));

    const repositoryNames =
      scope === "projects"
        ? [
            ...pinnedNames.filter(
              (name) =>
                !PROJECT_EXCLUSIONS.has(name.toLowerCase()) &&
                byName.has(name.toLowerCase()),
            ),
            ...repos
              .filter(
                (repo) =>
                  !PROJECT_EXCLUSIONS.has(repo.name.toLowerCase()) &&
                  !pinnedNames.some(
                    (name) => name.toLowerCase() === repo.name.toLowerCase(),
                  ),
              )
              .map((repo) => repo.name),
          ]
        : pinnedNames;

    const selected: PublicRepo[] = repositoryNames.flatMap((name) => {
      const repo = byName.get(name.toLowerCase());
      if (!repo) return [];
      return [{
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        homepage: repo.homepage,
        language: repo.language,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        topics: repo.topics ?? [],
        category: classifyRepo(repo),
        categories: filterCategories(repo),
        archived: repo.archived,
        fork: repo.fork,
        updatedAt: repo.updated_at,
      }];
    });

    return res.status(200).json({
      user: GITHUB_USER,
      scope,
      repositories: selected,
      refreshedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("github-pinned", error);
    return res.status(502).json({ error: "GitHub data unavailable" });
  }
}
