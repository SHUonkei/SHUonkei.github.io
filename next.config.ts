import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for GitHub Pages (served at the domain root for a
  // <user>.github.io repository, so no basePath is needed).
  output: "export",
  images: {
    // Required for next/image when using static export.
    unoptimized: true,
  },
};

export default nextConfig;
