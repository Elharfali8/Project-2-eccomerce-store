/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "m.media-amazon.com",
            pathname: "/**", // Allow all paths under this domain
          },
        ],
      },
};

export default nextConfig;
