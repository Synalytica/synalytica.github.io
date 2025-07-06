import type { NextConfig } from "next";

const isGithubActions = process.env.CI === "true";
const basePath = isGithubActions ? "" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  /* config options here */
};

export default nextConfig;
