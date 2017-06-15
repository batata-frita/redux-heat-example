/**
 * Sagui configuration object
 * see: http://sagui.js.org/
 */
module.exports = {
  pages: ['index'],
  develop: {
    historyApiFallback: true
  },
  additionalWebpackConfig: {
    output: {
      publicPath: '/'
    }
  }
}
