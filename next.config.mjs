/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'utfs.io',
                pathname: '/**',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/resume',
                destination: 'https://www.notion.so/indrajitsahani/Resume-X-Indrajit-36378c44adcc8064acadc91403c78309',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;