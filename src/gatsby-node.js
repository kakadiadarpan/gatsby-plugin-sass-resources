exports.modifyWebpackConfig = ({ config }, options) => {
  config.loader(`sass-resources`, {
    test: /\.s[ac]ss$/,
    loaders: ['sass-resources']
  })
  config.merge({
    sassResources: options.resources
  })
  return config
}