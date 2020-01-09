# wbdrioTests
## Quick start
Note: make sure you have installed java on your computer. If you run into any problems with these steps try closing and reopening the terminal.
1. From the terminal, clone the git repo — `git clone https://github.com/sonjetty/briostack.git` (Note: You will need to have git installed on your machine)

2. use nvm to install node version 8 (v8.16.2).  (You will need to install nvm first from here: https://github.com/coreybutler/nvm-windows)
    - the main commands you will want to use are `nvm install <version>` and `nvm use <version>`

3. run `npm i` (note: it is unlikely but you may need to run `npm install @wdio/jasmine-framework --save-dev`)

4. download chromedriver 78 https://chromedriver.storage.googleapis.com/index.html?path=78.0.3904.70/

5. Find the `chromedriver.exe` file inside of the project and delete it. Add the chromdriver file you downloaded to node_modules>chromedriver>lib.

6. for web testing run `npm run web', to run a specific suite (currently there is only 1 suite) run 'npm run web.suite1'

## Config
This uses a specific config for iOS and Android, see [configs](./config/) and are based on `wdio.shared.conf.js`.
This shared config holds all the defaults so the iOS and Android configs only need to hold the capabilities and specs that are needed for running on iOS and or Android (app or browser).

## Locator strategy for native apps
The locator strategy for this boilerplate is to use `accessibilityID`'s, see also the [WebdriverIO docs](http://webdriver.io/guide/usage/selectors.html#Accessibility-ID) or this newsletter on [AppiumPro](https://appiumpro.com/editions/20).
`accessibilityID`'s make it easy to script once and run on iOS and Android because most of the apps already have some `accessibilityID`'s.

If `accessibilityID`'s can't be used and for example only XPATH is only available then the following setup could be used to make cross-platform selectors

```js
const SELECTORS = {
    WEB_VIEW_SCREEN: browser.isAndroid
        ? '*//android.webkit.WebView'
        : '*//XCUIElementTypeWebView',
};
```

## Automating Chrome or Safari
Mobile web automation is almost the same as writing tests for desktop browsers. The only difference can be found in the configuration that needs to be used.
Click [here](./config/wdio.ios.browser.conf.js) to find the config for iOS Safari and [here](./config/wdio.android.browser.conf.js)) for Android Chrome.
For Android be sure that the lastest version of Chrome is installed, see also [here](./docs/FAQ.md#i-get-the-error-no-chromedriver-found-that-can-automate-chrome-).

For this boilerplate the testcases from the [jasmine-boilerplte](https://github.com/webdriverio/jasmine-boilerplate), created by [Christian Bromann](https://github.com/christian-bromann), are used.
