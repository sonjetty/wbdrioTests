const moment = require('moment');
exports.config = {
    // ====================
    // Runner and framework
    // Configuration
    // ====================
    runner: 'local',
    framework: 'jasmine',
    jasmineNodeOpts: {
        // Updated the timeout to 30 seconds due to possible longer appium calls
        // When using XPATH
        defaultTimeoutInterval: 999999,
        stopSpecOnExpectationFailure: true,
    },
    suites:
        {
          demos: [
            '.tests/specs/web/customerAngularDemo.js'
          ]
        },
      
   
    sync: true,
    logLevel: 'verbose',
    deprecationWarnings: true,
    bail: 0,
    baseUrl: 'http://the-internet.herokuapp.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    reporters: ['dot', 'spec'],
    

    // ====================
    // Appium Configuration
    // ====================
    // Using the wdio-appium-service here, just make sure you've installed
    // Appium on your local machine for example global instead of as
    // a project dependency with `npm install -g appium`
    services: ['appium'],
    // Some default settings, see
    // https://github.com/rhysd/wdio-appium-service
    // for the rest of the settings
    appium: {
        waitStartTime: 10000,
        args: {
            address: '127.0.0.1',
            commandTimeout: '15000',
           
        },
    },
    // Default port for Appium
    port: 4723,
    maxInstances: 1,

    // ====================
    // Some hooks
    // ====================
    
    /**
     * Function to be executed after a test, takes screenshot if test failed.
     * @param {Object} test test details
     * @param {Array.<String>} specs List of spec file paths that ran
     */

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
