module.exports = {
  all: true,
  include: [
    "web/src/lib/**.js"
  ],
  exclude: [
    "web/test/*.spec.js"
  ],
  checkCoverage: false,
  reporter: ['text', 'html']
}