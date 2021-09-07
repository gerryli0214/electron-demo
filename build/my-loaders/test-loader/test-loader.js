const loaderOptions = require('loader-utils')

module.exports = function (source) {
  const options = loaderOptions.getOptions(this)
  console.log(options)
  debugger
  return source
}
// 告诉webpack loader需要的是二进制数据
// module.exports.raw = true