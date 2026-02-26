import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright Configuration for DebarrasPower
 *
 * Features:
 * - 5 breakpoint configurations for comprehensive responsive testing
 * - Mobile touch gesture support enabled
 * - Visual regression testing ready
 * - Parallel execution for faster feedback
 * - Local development server integration
 */
export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['list'],
    ['json', { outputFile: 'test-results.json' }],
  ],

  use: {
    baseURL: 'http://localhost:8080',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    /**
     * Mobile Breakpoints
     * Testing small to large mobile devices
     */
    {
      name: 'mobile-small',
      use: {
        ...devices['iPhone SE'],
        viewport: { width: 375, height: 667 },
        hasTouch: true,
        contextOptions: {
          userAgent: 'DebarrasPower-E2E-Mobile-Small',
        },
      },
    },

    {
      name: 'mobile-large',
      use: {
        ...devices['iPhone 12 Pro'],
        viewport: { width: 390, height: 844 },
        hasTouch: true,
        contextOptions: {
          userAgent: 'DebarrasPower-E2E-Mobile-Large',
        },
      },
    },

    /**
     * Tablet Breakpoint
     * Testing tablet portrait and landscape
     */
    {
      name: 'tablet',
      use: {
        ...devices['iPad Pro'],
        viewport: { width: 1024, height: 1366 },
        hasTouch: true,
        contextOptions: {
          userAgent: 'DebarrasPower-E2E-Tablet',
        },
      },
    },

    /**
     * Desktop Breakpoint
     * Testing standard desktop resolutions
     */
    {
      name: 'desktop',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 720 },
        contextOptions: {
          userAgent: 'DebarrasPower-E2E-Desktop',
        },
      },
    },

    /**
     * Wide Desktop Breakpoint
     * testing large desktop monitors
     */
    {
      name: 'desktop-wide',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
        contextOptions: {
          userAgent: 'DebarrasPower-E2E-Desktop-Wide',
        },
      },
    },

    /**
     * Ultrawide Desktop Breakpoint
     * Testing ultrawide monitors for edge cases
     */
    {
      name: 'desktop-ultrawide',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 2560, height: 1440 },
        contextOptions: {
          userAgent: 'DebarrasPower-E2E-Desktop-Ultrawide',
        },
      },
    },
  ],

  // Start local dev server before running tests
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:8080',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
