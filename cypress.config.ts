// src/cypress.config.ts
import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'ih6re1',

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
  },
});
