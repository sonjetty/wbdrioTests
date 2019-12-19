const moment = require('moment');
exports.config = {



runner: 'local',
framework: 'jasmine',
jasmineNodeOpts: {
  defaultTimeoutInterval: 100000,
},
sync: true,
logLevel: 'verbose',
deprecationWarnings: true,
bail: 0,
waitforTimeout: 20000,
connectionRetryTimeout: 90000,
connectionRetryCount: 3,
reporters: ['dot', 'spec'],

maxInstances: 4,
capabilities: [
  //{
  //  maxInstances: 2,
  //  browserName: 'chrome',
  //  chromeOptions: {
  //    args: [
        //'--headless',
        //'disable-web-security',
        //'allow-running-insecure-content',
        //'user-data-dir=/Users/joltdev/Library/Application\ Support/Google/Chrome',
        //'profile-directory=Profile\ 2'
  //    ]}  
  //},
  {
    maxInstances: 2,
    browserName: 'firefox',
    "moz:firefoxOptions": {
      args: [
        //'-headless'
      ]
    },

}],



port: 4444, 
hostname: '127.0.0.1',
specs: [
  './tests/specs/web/*.js',
],
suites: {
    demos: [
      './tests/specs/web/customerAngularDemo.js'
    ]
},


services: ['selenium-standalone'],
baseUrl: 'https://test.briostack.com',
framework: 'jasmine',
logDir: './logs',

afterTest: function (test) {
  if (test.passed) {
      return;
    }
  let testTitle = test.title;
  let timeStamp = moment().format("YYYY-MM-DDTHH-mm-ss");
  let filePath = `${testTitle}_${timeStamp}`;
  filePath = filePath.replace(/\s+/g, '');
  browser.saveScreenshot(`./tests/screenshots/webshots/${filePath}.png`);
}

};


