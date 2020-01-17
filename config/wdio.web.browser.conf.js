const moment = require('moment');
exports.config = {



runner: 'local',
framework: 'jasmine',
jasmineNodeOpts: {
  defaultTimeoutInterval: 100000,
  stopSpecOnExpectationFailure: true,
},
sync: true,
logLevel: 'verbose',
deprecationWarnings: true,
bail: 0,
waitforTimeout: 20000,
connectionRetryTimeout: 90000,
connectionRetryCount: 3,
reporters: ['dot', 'spec'],

maxInstances: 10,
capabilities: [
  {
    maxInstances: 3,
    browserName: 'chrome',
    chromeOptions: {
      args: [
        //'--headless',
        //'disable-web-security',
        //'allow-running-insecure-content',
        //'user-data-dir=/Users/joltdev/Library/Application\ Support/Google/Chrome',
        //'profile-directory=Profile\ 2'
      ]}  
  },
  {
    maxInstances: 3,
    browserName: 'firefox',
    "moz:firefoxOptions": {
    args: [
       // '-headless'
    ]}
  },

],



port: 4444, 
hostname: '127.0.0.1',
specs: [
  './tests/specs/smoke/*.js',
  './tests/specs/regressions/*.js',
],
suites: {
    smoke: [
      //'./tests/specs/smoke/smokeNewCustomerAngular.js',
      //'./tests/specs/smoke/smokeNewCustomerBindows.js',
      //'./tests/specs/smoke/smokeScheduleAppointment.js',
      //'./tests/specs/smoke/smokeRecievePayment.js',
      './tests/specs/smoke/smokeCreateLeadBrioSales.js'
    ],
    regressions: [
      './tests/specs/regressions/customersAppointments.js'
    ]
},


services: ['selenium-standalone', 'firefox-profile'], 

          firefoxProfile: {
            "geo.enabled": true,
            "geo.provider.use_corelocation": true,
            "geo.prompt.testing": true,
            "geo.prompt.testing.allow": true,
            "geo.wifi.uri": "file:///C:/Users/sonje/code/wbdrioTests/geoLocation.json"

          },

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


