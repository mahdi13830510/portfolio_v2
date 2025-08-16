/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable standalone output for Docker
    output: 'standalone',

    // Optimize images
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },

    // Handle static files in Docker
    assetPrefix: process.env.NODE_ENV === 'production' ? undefined : undefined,

    // Experimental features (optional)
    experimental: {
        // Enable if using app directory features
        appDir: true,
    },

    // Custom webpack config (if needed)
    webpack: (config, { isServer }) => {
        // Handle audio files
        config.module.rules.push({
            test: /\.(mp3|wav|ogg|m4a)$/,
            use: {
                loader: 'file-loader',
                options: {
                    publicPath: '/_next/static/media/',
                    outputPath: 'static/media/',
                },
            },
        });

        return config;
    },

    // Environment variables that should be available on the client side
    env: {
        // Add any environment variables you want to expose to the client
    },
};

export default nextConfig;