const os = require('os')
const fs = require('fs')
const path = require('path')

/**
 * @description client global cache
 */
class Storage {
  constructor(filename = '.electron-cache-file') {
    this.filename = filename
    this.init()
  }

  init () {
    this.homedir = os.homedir()
    this.cacheFilePath = path.join(this.homedir, this.filename)
    if (!fs.existsSync(this.cacheFilePath)) {
      fs.writeFileSync(this.cacheFilePath, '')
    }
    // 公共缓存
    this.commonCache = null
    this.readFile()
  }

  readFile () {
    let content = null
    try {
      let data = fs.readFileSync(this.cacheFilePath)
      if (data.length !== 0){
        content = decodeURIComponent(data.toString())
        content = JSON.parse(content)
      }
      this.commonCache = content || {}
    } catch (e) {
      throw e
    }
    return this.commonCache
  }

  writeFile () {
    try {
      let data = JSON.stringify(this.commonCache)
      fs.writeFileSync(this.cacheFilePath, encodeURIComponent(data))
    } catch (e) {
      throw e
    }
  }

  get (key) {
    if (!this.commonCache) this.readFile()
    return this.commonCache[key]
  }

  set (key, value) {
    if (!this.commonCache) this.readFile()
    this.commonCache[key] = value
    this.writeFile()
  }

  remove (key) {
    if (!this.commonCache) this.readFile()
    if (!this.commonCache[key]) return
    delete this.commonCache[key]
    this.writeFile()
  }

  clear () {
    if (!this.commonCache) this.readFile()
    this.commonCache = Object.create(null)
    this.writeFile()
  }

}

module.exports = Storage