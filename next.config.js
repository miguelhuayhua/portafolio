module.exports = {
  env: { URL: process.env.URL },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node/,
      use: "raw-loader",
    });
    return config;
  },
  images: {
    domains: [process.env.DOMAIN],
    output: "standalone",
    reactStrictMode: false,
  },
  experimental: {
    appDir: true,
  },
  output:'export'
};
