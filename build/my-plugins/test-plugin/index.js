class BasicPlugin {
  constructor (options) {
    console.log(options)
  }

  apply (compiler) {
    compiler.plugin('compilation', function (compilation) {
      debugger
    })

    compiler.plugin('emit', function (compilation, callback) {
      debugger
      callback()
    })
  }
}

module.exports = BasicPlugin