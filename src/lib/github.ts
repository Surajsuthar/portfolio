export interface MergedPR {
	id: number;
	number: number;
	title: string;
	html_url: string;
	repository_url: string;
	repoName: string;
	repoFullName: string;
	merged_at: string;
	created_at: string;
	body?: string | null;
	labels: { name: string; color: string }[];
}

interface GitHubSearchItem {
	id: number;
	number: number;
	title: string;
	html_url: string;
	repository_url: string;
	pull_request?: {
		merged_at: string | null;
	};
	created_at: string;
	body?: string | null;
	labels: { name: string; color: string }[];
}

interface GitHubSearchResponse {
	total_count: number;
	items: GitHubSearchItem[];
}

const GITHUB_USERNAME = "Surajsuthar";

function extractRepoFullName(repositoryUrl: string): string {
	// repository_url looks like: https://api.github.com/repos/owner/repo
	const parts = repositoryUrl.split("/repos/");
	return parts[1] ?? repositoryUrl;
}

function extractRepoName(repositoryUrl: string): string {
	const fullName = extractRepoFullName(repositoryUrl);
	const parts = fullName.split("/");
	return parts[parts.length - 1] ?? fullName;
}

export async function getMergedPRs(): Promise<MergedPR[]> {
	const headers: HeadersInit = {
		Accept: "application/vnd.github+json",
		"X-GitHub-Api-Version": "2022-11-28",
	};

	if (process.env.GITHUB_TOKEN) {
		headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
	}

	const url = `https://api.github.com/search/issues?q=author:${GITHUB_USERNAME}+type:pr+is:merged&per_page=30&sort=updated&order=desc`;

	const res = await fetch(url, {
		headers,
		next: { revalidate: 3600 }, // revalidate every hour
	});

	if (!res.ok) {
		console.error(`GitHub API error: ${res.status} ${res.statusText}`);
		return [];
	}

	const data: GitHubSearchResponse = await res.json();

	return data.items
		.filter((item) => {
			const fullName = extractRepoFullName(item.repository_url);
			const owner = fullName.split("/")[0]?.toLowerCase();
			return owner !== GITHUB_USERNAME.toLowerCase();
		})
		.map((item) => ({
			id: item.id,
			number: item.number,
			title: item.title,
			html_url: item.html_url,
			repository_url: item.repository_url,
			repoName: extractRepoName(item.repository_url),
			repoFullName: extractRepoFullName(item.repository_url),
			merged_at: item.pull_request?.merged_at ?? item.created_at,
			created_at: item.created_at,
			body: item.body,
			labels: item.labels ?? [],
		}));
}
