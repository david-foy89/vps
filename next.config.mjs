function pagesBasePath() {
  if (process.env.BASE_PATH) return process.env.BASE_PATH.replace(/\/$/, "");
  if (!process.env.GITHUB_ACTIONS) return "";
  const repo = (process.env.GITHUB_REPOSITORY || "").split("/")[1] || "";
  if (!repo || repo.endsWith(".github.io")) return "";
  return `/${repo}`;
}

const basePath = pagesBasePath();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.js",
  },
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
