const Calc = require('../class/calc.js')
const expect = require('expect.js')

const calcInstance = new Calc()
describe('Test calc add operation', function () {
  it('should 1 + 2 === 3', function () {
    expect(calcInstance.add(1, 2)).to.be(3)
  });

  it('should summary + 2 === 4', function () {
    expect(calcInstance.add(2)).to.be(5)
  });

  it('should 1 + 2 === 3 after clear', function () {
    // 指定当前测试用例超时时间
    this.timeout(0)
    calcInstance.add.clear()
    return new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, 2000)
    }).then(() => {
      expect(calcInstance.add(1, 2)).to.be(3)
    })
  });
})