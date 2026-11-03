import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/githup_action",
  images: { unoptimized: true },
};

export default nextConfig;