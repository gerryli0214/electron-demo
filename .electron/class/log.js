const electronLog = require('electron-log')

class Log {
  constructor () {
    this.init()
  }

  init () {
    electronLog.transports.console.format(`[{y}-{m}-{d} {h}:{i}:{s}.{ms}] [{level}] {text}`)
    electronLog.transports.file.maxSize = 5 * 1024 * 1024
  }
}

module.exports = Log