exports.config = {
  specs: [
    './specs/**/*.js'
  ],
  maxInstances: 10,
  capabilities: [{
    maxInstances: 5,
    browserName: 'chrome'
    // browserName: 'firefox'

  }],
  sync: true,
  logLevel: 'error',
  coloredLogs: true,
  reporters: ['spec'],
  // reporters: ['concise'],
  screenshotPath: './errorShots/',
  baseUrl: 'http://server:9000',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd'
  },
  plugins: {
    'wdio-screenshot': {}
  }
}
