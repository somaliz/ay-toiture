import { test, expect } from '@playwright/test';

/**
 * Quote Flow E2E Tests
 *
 * Tests the complete quote request flow across all breakpoints:
 * - Mobile devices (touch gestures)
 * - Tablet devices (touch + responsive layout)
 * - Desktop devices (mouse interactions)
 *
 * Validates:
 * - Contact section visibility
 * - Phone call functionality
 * - Email functionality
 * - Responsive layout at all breakpoints
 */

test.describe('Quote Flow', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to homepage
    await page.goto('/');

    // Wait for page to fully load
    await expect(page.getByRole('main')).toBeVisible();
  });

  test('should display contact section with call-to-action', async ({ page }) => {
    // Scroll to contact section
    const contactSection = page.getByTestId('contact-section');
    await expect(contactSection).toBeVisible();

    // Verify heading is visible
    await expect(
      page.getByRole('heading', { name: /besoin d'un débarras/i, exact: false })
    ).toBeVisible();

    // Verify subheading
    await expect(
      page.getByText(/devis gratuit et sans engagement/i, { exact: false })
    ).toBeVisible();
  });

  test('should display phone number button correctly', async ({ page, isMobile }) => {
    // Scroll to contact section
    const contactSection = page.getByTestId('contact-section');
    await contactSection.scrollIntoViewIfNeeded();

    // Find phone button
    const phoneButton = page.getByRole('link', { name: /06 59 63 70 06/i });
    await expect(phoneButton).toBeVisible();

    // Verify phone button has correct href
    const href = await phoneButton.getAttribute('href');
    expect(href).toBe('tel:+33659637006');

    // On mobile, verify button is large enough for touch (min 44x44px)
    if (isMobile) {
      const box = await phoneButton.boundingBox();
      expect(box?.height).toBeGreaterThanOrEqual(44);
      expect(box?.width).toBeGreaterThanOrEqual(44);
    }
  });

  test('should display email button correctly', async ({ page, isMobile }) => {
    // Scroll to contact section
    const contactSection = page.getByTestId('contact-section');
    await contactSection.scrollIntoViewIfNeeded();

    // Find email button
    const emailButton = page.getByRole('link', { name: /envoyer un email/i });
    await expect(emailButton).toBeVisible();

    // Verify email button has correct href
    const href = await emailButton.getAttribute('href');
    expect(href).toBe('mailto:contact@debarraspower.com');

    // On mobile, verify button is large enough for touch
    if (isMobile) {
      const box = await emailButton.boundingBox();
      expect(box?.height).toBeGreaterThanOrEqual(44);
      expect(box?.width).toBeGreaterThanOrEqual(44);
    }
  });

  test('should layout buttons correctly on mobile', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Mobile only test');

    // Scroll to contact section
    const contactSection = page.getByTestId('contact-section');
    await contactSection.scrollIntoViewIfNeeded();

    const phoneButton = page.getByRole('link', { name: /06 59 63 70 06/i });
    const emailButton = page.getByRole('link', { name: /envoyer un email/i });

    // Verify buttons are stacked vertically on mobile
    const phoneBox = await phoneButton.boundingBox();
    const emailBox = await emailButton.boundingBox();

    expect(phoneBox).toBeDefined();
    expect(emailBox).toBeDefined();

    // Email button should be below phone button
    expect(emailBox!.y).toBeGreaterThan(phoneBox!.y);
  });

  test('should layout buttons correctly on desktop', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Desktop only test');

    // Scroll to contact section
    const contactSection = page.getByTestId('contact-section');
    await contactSection.scrollIntoViewIfNeeded();

    const phoneButton = page.getByRole('link', { name: /06 59 63 70 06/i });
    const emailButton = page.getByRole('link', { name: /envoyer un email/i });

    // Verify buttons are side by side on desktop
    const phoneBox = await phoneButton.boundingBox();
    const emailBox = await emailButton.boundingBox();

    expect(phoneBox).toBeDefined();
    expect(emailBox).toBeDefined();

    // Email button should be to the right of phone button
    expect(emailBox!.x).toBeGreaterThan(phoneBox!.x);

    // Buttons should be roughly on the same Y position (within 10px)
    expect(Math.abs(emailBox!.y - phoneBox!.y)).toBeLessThanOrEqual(10);
  });

  test('should handle touch gestures on mobile', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Mobile touch test only');

    // Scroll to contact section with touch swipe
    await page.evaluate(() => {
      window.scrollTo({ top: 5000, behavior: 'smooth' });
    });

    const contactSection = page.getByTestId('contact-section');
    await expect(contactSection).toBeVisible();

    // Tap phone button (touch interaction)
    const phoneButton = page.getByRole('link', { name: /06 59 63 70 06/i });
    await phoneButton.tap();

    // Verify tel: link would trigger (in real browser would open phone app)
    const href = await phoneButton.getAttribute('href');
    expect(href).toMatch(/^tel:/);
  });

  test('should have proper contrast and spacing', async ({ page }) => {
    const contactSection = page.getByTestId('contact-section');
    await contactSection.scrollIntoViewIfNeeded();

    // Verify section has background
    const section = page.locator('section#devis');
    const bgColor = await section.evaluate((el) =>
      window.getComputedStyle(el).backgroundColor
    );
    expect(bgColor).not.toBe('rgba(0, 0, 0, 0)');
    expect(bgColor).not.toBe('transparent');
  });

  test('should be accessible from navigation', async ({ page }) => {
    // Find and click navigation link to devis section
    const navLink = page.getByRole('link', { name: /devis/i }).first();
    if (await navLink.isVisible()) {
      await navLink.click();
    } else {
      // Alternative: navigate directly to section
      await page.goto('/#devis');
    }

    // Verify contact section is in view
    const contactSection = page.getByTestId('contact-section');
    await expect(contactSection).toBeInViewport();
  });

  test('should handle viewport resize gracefully', async ({ page, isMobile }) => {
    const contactSection = page.getByTestId('contact-section');
    await contactSection.scrollIntoViewIfNeeded();

    const phoneButton = page.getByRole('link', { name: /06 59 63 70 06/i });
    await expect(phoneButton).toBeVisible();

    // Resize viewport
    if (isMobile) {
      await page.setViewportSize({ width: 1024, height: 768 });
    } else {
      await page.setViewportSize({ width: 375, height: 667 });
    }

    // Buttons should still be visible and functional after resize
    await expect(phoneButton).toBeVisible();
    await expect(
      page.getByRole('link', { name: /envoyer un email/i })
    ).toBeVisible();
  });

  test('should include proper accessibility attributes', async ({ page }) => {
    const contactSection = page.getByTestId('contact-section');
    await contactSection.scrollIntoViewIfNeeded();

    // Check for proper heading hierarchy
    const heading = page.getByRole('heading', {
      name: /besoin d'un débarras/i,
      level: 2,
    });
    await expect(heading).toBeVisible();

    // Buttons should have accessible names
    const phoneButton = page.getByRole('link', { name: /06 59 63 70 06/i });
    await expect(phoneButton).toHaveAttribute('href');

    const emailButton = page.getByRole('link', { name: /envoyer un email/i });
    await expect(emailButton).toHaveAttribute('href');
  });

  test('should load quickly and be interactive', async ({ page }) => {
    const startTime = Date.now();

    await page.goto('/');
    const contactSection = page.getByTestId('contact-section');

    // Wait for section to be visible
    await contactSection.scrollIntoViewIfNeeded();
    await expect(contactSection).toBeVisible();

    const loadTime = Date.now() - startTime;

    // Section should be visible within 5 seconds
    expect(loadTime).toBeLessThan(5000);
  });

  test('should handle keyboard navigation', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Desktop keyboard navigation test');

    const contactSection = page.getByTestId('contact-section');
    await contactSection.scrollIntoViewIfNeeded();

    // Tab to phone button
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    const phoneButton = page.getByRole('link', { name: /06 59 63 70 06/i });
    await expect(phoneButton).toBeFocused();

    // Press Enter to activate
    await page.keyboard.press('Enter');

    // Verify navigation would happen
    const href = await phoneButton.getAttribute('href');
    expect(href).toBe('tel:+33659637006');
  });
});

/**
 * Visual Regression Tests
 *
 * These tests take screenshots at different breakpoints to catch visual regressions
 */
test.describe('Quote Flow - Visual Regression', () => {
  test('should match screenshot on mobile', async ({ page }) => {
    await page.goto('/');

    const contactSection = page.getByTestId('contact-section');
    await contactSection.scrollIntoViewIfNeeded();

    await expect(contactSection).toHaveScreenshot('contact-mobile.png', {
      maxDiffPixels: 100,
    });
  });

  test('should match screenshot on desktop', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Desktop screenshot test');

    await page.goto('/');

    const contactSection = page.getByTestId('contact-section');
    await contactSection.scrollIntoViewIfNeeded();

    await expect(contactSection).toHaveScreenshot('contact-desktop.png', {
      maxDiffPixels: 100,
    });
  });
});
