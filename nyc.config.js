module.exports = {
  all: true,
  include: [
    "web/src/lib/**.js",
    ".electron/class/**.js",
    "web/src/**/*.js",
    "web/src/**/*.vue"
  ],
  exclude: [
    "web/test/*.spec.js",
    ".electron/test/*.spec.js"
  ],
  checkCoverage: false,
  reporter: ['text', 'html']
}