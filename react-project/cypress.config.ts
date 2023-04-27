import { defineConfig } from 'cypress';
import codeCoverageTask from '@cypress/code-coverage/task';

export default defineConfig({
  video: false,
  env: {
    codeCoverage: {
      exclude: 'cypress/**/*.*',
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      //  implement node event listeners here
      codeCoverageTask(on, config);
      return config;
    },
    baseUrl: 'http://localhost:5173',
  },
  
});
