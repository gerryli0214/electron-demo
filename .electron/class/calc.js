/**
 * @description 测试工具类
 */
class Calc {
  constructor() {
    this.add = this.addFun()
  }
  // 函数柯里化
  addFun () {
    let args = []

    let calcFun = function (...params) {
      args = args.concat(params)
      return args.reduce((total, current) => {
        return total + current
      }, 0)
    }

    calcFun.clear = function () {
      args = []
    }

    return calcFun
  }
}

module.exports = Calc