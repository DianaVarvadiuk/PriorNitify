const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
      "baseUrl": "https://dev-login.priornotify.com/",
    
    "env": {
      "email": "dianavarvadiuk@gmail.com",
      "password": "Tt12345678"
    }
  },
});

