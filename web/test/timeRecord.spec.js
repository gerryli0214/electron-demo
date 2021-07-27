const expect = require('expect.js')
const $require = require('esm')(module)
const TimeRecord = $require('../src/lib/time-record').default

describe('test time record function', function () {
  let timeInstance = new TimeRecord()
  it ('should originDate === "00:00:00"', function () {
    expect(timeInstance.originData).to.be('00:00:00')
  })

  it('test parse date function', function () {
    let millseconds = timeInstance.parseDate('00:10:10')
    expect(millseconds).to.be(10 * 60 * 1000 + 10 * 1000)
  })
})