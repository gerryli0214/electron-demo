const PLUGIN_NAME = 'base-plugin'
class BasicPlugin {
  constructor (options) {
    this.options = options
  }

  apply (compiler) {
    let self = this
    // 获取日志打印组件
    const logger = compiler.getInfrastructureLogger(PLUGIN_NAME)
    // 生成资源到output目录之前回调
    compiler.plugin('emit', function (compilation, callback) {
      let str = ''
      for (let filename in compilation.assets) {
        str += `filename: ${filename}  size: ${self.formatSize(compilation.assets[filename]['size']())}\n`
      }
      // 通过compilation.assets可以获取打包后静态资源信息，同样也可以写入资源
      compilation.assets['build.md'] = {
        source:function(){
          return str
        },
        size:function(){
          return str.length
        }
      }
      logger.info(str)
      callback()
    })
  }

  formatSize (size) {
    let result = size
    if (size < 1024) {
      result = size + ' B'
    } else if (size < 1024 * 1024) {
      result = (size / 1024).toFixed(2) + ' KB'
    } else if (size < 1024 * 1024 * 1024) {
      result = (size / (1024 * 1024)).toFixed(2) + ' MB'
    }
    return result
  }
}

module.exports = BasicPlugin