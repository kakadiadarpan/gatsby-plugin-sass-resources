exports.onCreateWebpackConfig = ({ actions }, options) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/,
          loader: "sass-resources-loader",
          options: {
            resources: options.resources
          }
        }
      ]
    }
  });
};
