
module.exports = {
    env: {
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.node/,
        use: 'raw-loader'
      })
      return config;
    }
  };