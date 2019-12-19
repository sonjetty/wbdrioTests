const { config } = require('./wdio.shared.conf');
const chromedriver = require('chromedriver');

config.maxInstances = 10;
config.capabilities = [{
  maxInstances: 4,
  browserName: 'chrome',
  chromeOptions: {
    args: [
    //'--headless',
    //'disable-web-security',
    //'allow-running-insecure-content',
    //'user-data-dir=/Users/joltdev/Library/Application\ Support/Google/Chrome',
    //'profile-directory=Profile\ 2'
    ],

    
    }
}];
config.port = 4444;
config.hostname = '127.0.0.1';
config.specs = [
  './tests/specs/webteardown/*.js',
];
config.services = ['selenium-standalone', 'devtools'];
config.baseUrl = 'http://localhost';
config.framework = 'jasmine';
config.logDir = './logs';

config.onPrepare = function () {
  let args = ['--port=4444', '--url-base=/wd/hub', '--silent'];
  chromedriver.start(args);
};
config.onComplete = function () {
  chromedriver.stop();
};

exports.config = config;