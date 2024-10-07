/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: () => {
        return [
            {
                source: "/",
                destination: "/",
            },
            {
                source: "/imc",
                destination: "/imc-page",
            },
            {
                source: "/media",
                destination: "/media-page",
            }
        ]
    }
};

export default nextConfig;
