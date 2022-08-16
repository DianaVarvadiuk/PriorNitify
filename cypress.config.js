const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://dev-login.priornotify.com/",
    env: {
      email: "varvadiukdidi+2@gmail.com",
      password: "Dd12345678",
    },
  },
});
