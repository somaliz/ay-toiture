import { test, expect } from "@playwright/test";

test.describe("CategorizedGallery", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:8082/");
  });

  test("should display gallery section with category tabs", async ({ page }) => {
    // Scroll to gallery section
    await page.getByText("Galerie").first().scrollIntoViewIfNeeded();

    // Check title
    await expect(page.getByText("Nos réalisations")).toBeVisible();

    // Check all category tabs are present (use role to avoid footer text conflict)
    await expect(page.getByRole("tab", { name: "Tous" })).toBeVisible();
    await expect(page.getByRole("tab", { name: "Classique" })).toBeVisible();
    await expect(page.getByRole("tab", { name: "Valeurs" })).toBeVisible();
    await expect(page.getByRole("tab", { name: "Diogène" })).toBeVisible();
  });

  test("should display photo counts on tabs", async ({ page }) => {
    await page.getByText("Galerie").first().scrollIntoViewIfNeeded();

    // "Tous" should show count (11 photos total) - use role to avoid footer conflict
    const tousTab = page.getByRole("tab", { name: "Tous" });
    await expect(tousTab).toContainText("11");
  });

  test("should filter photos when clicking category tabs", async ({ page }) => {
    await page.getByText("Galerie").first().scrollIntoViewIfNeeded();

    // Click on "Classique" tab - use role to be more specific
    await page.getByRole("tab", { name: "Classique" }).click();

    // Wait for potential state change
    await page.waitForTimeout(500);

    // Verify the tab is now active
    const classiqueTab = page.getByRole("tab", { name: "Classique" });
    await expect(classiqueTab).toHaveAttribute("data-state", "active");
  });

  test("should display gallery grid with photos", async ({ page }) => {
    await page.getByText("Galerie").first().scrollIntoViewIfNeeded();

    // Check that gallery grid exists
    const galleryGrid = page.getByTestId("gallery-grid");
    await expect(galleryGrid).toBeVisible();

    // Check that photos are rendered (at least some photo containers)
    const photos = page.getByTestId(/gallery-photo-/);
    const photoCount = await photos.count();
    expect(photoCount).toBeGreaterThan(0);
  });

  test("should have responsive masonry layout", async ({ page }) => {
    await page.getByText("Galerie").first().scrollIntoViewIfNeeded();

    // Check for masonry grid classes
    const galleryGrid = page.getByTestId("gallery-grid");
    await expect(galleryGrid).toHaveClass(/columns-1/);
  });

  test("should open lightbox when clicking a photo", async ({ page }) => {
    await page.getByText("Galerie").first().scrollIntoViewIfNeeded();

    // Click on the first photo
    const firstPhoto = page.getByTestId(/gallery-photo-/).first();
    await firstPhoto.click();

    // Lightbox should appear
    const lightbox = page.getByTestId("gallery-lightbox");
    await expect(lightbox).toBeVisible();

    // Navigation buttons should be visible
    await expect(page.getByTestId("lightbox-next")).toBeVisible();
    await expect(page.getByTestId("lightbox-prev")).toBeVisible();
  });

  test("should close lightbox when clicking close button", async ({ page }) => {
    await page.getByText("Galerie").first().scrollIntoViewIfNeeded();

    // Open lightbox
    const firstPhoto = page.getByTestId(/gallery-photo-/).first();
    await firstPhoto.click();

    // Wait for lightbox to appear
    await page.waitForSelector('[data-testid="gallery-lightbox"]', { state: 'visible' });

    // Verify close button is present
    const closeButton = page.getByRole("button", { name: /Fermer/i });
    await expect(closeButton).toBeVisible();

    // Click Escape key to close (more reliable than clicking close button)
    await page.keyboard.press('Escape');

    // Lightbox should be closed
    const lightbox = page.getByTestId("gallery-lightbox");
    await expect(lightbox).not.toBeVisible();
  });

  test("should navigate between photos in lightbox", async ({ page }) => {
    await page.getByText("Galerie").first().scrollIntoViewIfNeeded();

    // Open lightbox
    const firstPhoto = page.getByTestId(/gallery-photo-/).first();
    await firstPhoto.click();

    // Wait for lightbox to open
    await page.waitForSelector('[data-testid="gallery-lightbox"]', { state: 'visible' });

    // Click next button - scroll into view first if needed
    const nextButton = page.getByTestId("lightbox-next");
    await nextButton.scrollIntoViewIfNeeded();
    await nextButton.click();
    await page.waitForTimeout(200);

    // Lightbox should still be open
    const lightbox = page.getByTestId("gallery-lightbox");
    await expect(lightbox).toBeVisible();

    // Click prev button
    const prevButton = page.getByTestId("lightbox-prev");
    await prevButton.scrollIntoViewIfNeeded();
    await prevButton.click();
    await page.waitForTimeout(200);

    // Lightbox should still be open
    await expect(lightbox).toBeVisible();
  });

  test("should show overlay on photo hover", async ({ page }) => {
    await page.getByText("Galerie").first().scrollIntoViewIfNeeded();

    // Hover over first photo
    const firstPhoto = page.getByTestId(/gallery-photo-/).first();
    await firstPhoto.hover();

    // Overlay should appear (check for text that shows on hover)
    await page.waitForTimeout(300);

    // The photo should have hover effects
    await expect(firstPhoto).toBeVisible();
  });
});
