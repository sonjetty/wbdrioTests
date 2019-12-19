const path = require('path');
const config = require('./wdio.shared.conf').config;

// ============
// Specs
// ============
config.specs = [
    './tests/specs/**/app*.spec.js'
];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // The defaults you need to have in your config
        deviceName: 'iPad Air',
        platformName: 'iOS',
        platformVersion: '11.2',
        orientation: 'PORTRAIT',
        // The path to the app
        app: '/Users/joltdev/jolt/code/DerivedData/universal-eorznzqudevvneehnlffsbewbqmf/Build/Products/Release-iphonesimulator/universal.app',
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        noReset: true,
        "deprecationWarnings": false,
        newCommandTimeout: 240,
    },
];

exports.config = config;
