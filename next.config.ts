/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        turbopack: {
            root: __dirname,
        },
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
            },
        ],
    },
};

export default nextConfig;
