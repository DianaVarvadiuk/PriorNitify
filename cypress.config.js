const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://dev-login.priornotify.com/",
    env: {
      email: "varvadiukdidi@gmail.com",
      password: "Ff12345678",
    },
  },
});
