const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const repoName = "Pixelops-Design";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGitHubPages ? `/${repoName}` : "",
  assetPrefix: isGitHubPages ? `/${repoName}/` : undefined,
};

export default nextConfig;
