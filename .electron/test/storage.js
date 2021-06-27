const expect = require('expect.js')
const Storage = require('../class/storage')
const fs = require('fs')

describe('Storage', function () {
  let cacheFileName = '.cache-file'
  let instance = new Storage(cacheFileName)
  describe('new Storage', function () {
    it('should instance instanceof Storage', function () {
      expect(instance instanceof Storage).to.be.ok()
    })
    it('should filename is ' + cacheFileName, function () {
      expect(instance.filename === cacheFileName).to.be.ok()
    })
    it('should create cacheFile success', function () {
      expect(fs.existsSync(instance.cacheFilePath)).to.be.ok()
    })
  })

  describe('set, get, remove, clear', function () {
    it('should testValue === 123', function () {
      let testValue = 123
      instance.set('testValue', testValue)
      let setValue = instance.get('testValue')
      expect(setValue).to.be(testValue)
    });

    it('should cache data should be equal { testValue: 123}', function () {
      let cacheData = JSON.stringify(instance.readFile())
      expect(cacheData).to.be(JSON.stringify({testValue: 123}))
    });

    it('should testValue === undefined', function () {
      instance.remove('testValue')
      let currentValue = instance.get('testValue')
      expect(currentValue).to.be(undefined)
    });

    it('should storage be empty', function () {
      instance.set('testValue', 456)
      instance.clear()
      let testValue = instance.get('testValue')
      let cacheData = JSON.stringify(instance.readFile())
      expect(testValue).to.be(undefined)
      expect(cacheData).to.be(JSON.stringify({}))
    });
  })
})