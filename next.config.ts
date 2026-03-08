import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      new URL("https://battle-bot-site.onrender.com//**"),
      new URL("https://chain-club.by/**"),
    ],
  },
  devIndicators: false,
};

export default nextConfig;
