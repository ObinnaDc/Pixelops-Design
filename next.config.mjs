const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const repoName =
  process.env.GITHUB_REPOSITORY?.split("/").at(-1) ?? "Pixelops-Design";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? `/${repoName}` : "",
  },
  basePath: isGitHubPages ? `/${repoName}` : "",
  assetPrefix: isGitHubPages ? `/${repoName}/` : undefined,
};

export default nextConfig;
