const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  name: 'Automação Web',
  tests: './steps/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://automationpratice.com.br',
      browser: 'chrome',
      waitForTimeout: 5000,
      desiredCapabilities: {
        chromeOptions: {
          //utilizado para rodar os testes sem precisar abrir o navegador
          //args: ["--headless"]
        }
      }
    }
  },
  include: {
    "I": "./steps_file.js",
    "home_page": "./pages/home_page.js",
    "loginPage": "./pages/login.js",
    "create_user": "./pages/create_user.js"
  },
  bootstrap: null,
  teardown: null,
  mocha: {},
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  }
}