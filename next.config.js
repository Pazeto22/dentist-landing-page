/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        // test: /\.(js|ts)x?$/,
        // for webpack 5 use
        and: [/\.(js|ts)x?$/],
      },

      use: ["@svgr/webpack"],
    });

    return config;
  },

  images: {
    domains: ["www.evacommerce.com.br", "www.arquivos.plataformaeva.com"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
