module.exports = {
  all: true,
  include: [ // 包含测试文件
    "web/src/lib/**.js",
    ".electron/class/**.js",
    "web/src/**/*.js",
    "web/src/**/*.vue"
  ],
  exclude: [ // 排除测试文件
    "web/test/*.spec.js",
    ".electron/test/*.spec.js"
  ],
  checkCoverage: false, // 测试基准覆盖率
  reporter: ['text', 'html'] // 测试报告格式
}