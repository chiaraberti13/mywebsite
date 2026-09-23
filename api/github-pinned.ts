import type { VercelRequest, VercelResponse } from "@vercel/node";

const GITHUB_USER = "chiaraberti13";
const MAX_PINNED = 6;

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

type PublicRepo = {
  name: string;
  description: string | null;
  url: string;
  homepage: string | null;
  language: string | null;
  stars: number;
  forks: number;
  topics: string[];
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

  res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=3600");
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  const token = process.env.GITHUB_TOKEN?.trim();

  try {
    let pinnedNames: string[] = [];

    if (token) {
      try {
        pinnedNames = await pinnedFromGraphQL(token);
      } catch {
        pinnedNames = [];
      }
    }

    if (!pinnedNames.length) {
      pinnedNames = await pinnedFromPublicProfile();
    }

    if (!pinnedNames.length) {
      return res.status(502).json({ error: "Pinned repositories unavailable" });
    }

    const repos = await listOwnedRepos(token);
    const byName = new Map(repos.map((repo) => [repo.name.toLowerCase(), repo]));

    const pinned: PublicRepo[] = pinnedNames.flatMap((name) => {
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
        archived: repo.archived,
        fork: repo.fork,
        updatedAt: repo.updated_at,
      }];
    });

    return res.status(200).json({
      user: GITHUB_USER,
      repositories: pinned,
      refreshedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("github-pinned", error);
    return res.status(502).json({ error: "GitHub data unavailable" });
  }
}
