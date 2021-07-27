module.exports = {
  all: true,
  include: [
    "web/src/lib/**.js",
    ".electron/class/**.js"
  ],
  exclude: [
    "web/test/*.spec.js",
    ".electron/test/*.spec.js"
  ],
  checkCoverage: false,
  reporter: ['text', 'html']
}