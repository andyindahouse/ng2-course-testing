exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  multiCapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }],
  specs: ['build/test/e2e/**/*.spec.js'],
  useAllAngular2AppRoots: true
}
