import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          has: [{ type: "host", value: "admin.larashley.com" }],
          destination: "/admin",
        },
      ],
    };
  },
};

export default nextConfig;
