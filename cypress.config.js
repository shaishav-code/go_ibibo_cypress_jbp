const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      /// <reference types=”cypress-xpath” />
    },

    testIsolation: false,
    projectId: "r9v9pq",
  },
});
