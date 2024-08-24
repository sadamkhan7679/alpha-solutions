
/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ['via.placeholder.com',"upload.wikimedia.org","images.unsplash.com"],
    }
};

export default nextConfig;
