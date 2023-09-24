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
    domains: ['github.io', 'localhost'],
    output: "standalone",
    reactStrictMode: false,
  },
  experimental: {
    appDir: true,
  },
  output:'export'
};
