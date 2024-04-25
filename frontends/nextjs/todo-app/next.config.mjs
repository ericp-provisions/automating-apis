/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: false,
  transpilePackages: ["./ts-api"],
};

export default nextConfig;
