const { defineConfig } = require('@playwright/test');
require('dotenv').config();

module.exports = defineConfig({

  // Test directory
  testDir: './tests',

  // Max time per test (30 seconds)
  timeout: 30000,

  // Report format
  reporter: 'html',

  // Shared settings for all tests
  use: {
    browserName: 'chromium',
    channel: 'chrome',        // Use installed Google Chrome
    headless: false,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
});

// Useful commands:
// npx playwright test                    → Run all tests
// npx playwright test --ui               → Open UI mode
// npx playwright codegen --channel=chrome <url>  → Record tests