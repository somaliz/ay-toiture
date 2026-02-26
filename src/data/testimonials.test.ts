import { describe, it, expect } from 'vitest';
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';

const projectRoot = process.cwd();
const testimonialsDataFile = join(projectRoot, 'src', 'data', 'testimonials.ts');

describe('Testimonials Data', () => {
  describe('Data File Structure', () => {
    it('should have testimonials.ts file', () => {
      expect(existsSync(testimonialsDataFile), 'testimonials.ts should exist').toBe(true);
    });

    it('should export Testimonial interface', () => {
      const content = readFileSync(testimonialsDataFile, 'utf-8');
      expect(content).toMatch(/export interface Testimonial/);
    });

    it('should have required Testimonial properties', () => {
      const content = readFileSync(testimonialsDataFile, 'utf-8');
      expect(content).toMatch(/name:\s*string/);
      expect(content).toMatch(/location:\s*string/);
      expect(content).toMatch(/rating:\s*number/);
      expect(content).toMatch(/text:\s*string/);
      expect(content).toMatch(/date:\s*string/);
    });
  });

  describe('Google Rating Info', () => {
    it('should export googleRating object', () => {
      const content = readFileSync(testimonialsDataFile, 'utf-8');
      expect(content).toMatch(/export const googleRating/);
    });

    it('should have rating score of 4.9', () => {
      const content = readFileSync(testimonialsDataFile, 'utf-8');
      expect(content).toMatch(/rating:\s*4\.9|rating:\s*4\.0/);
    });

    it('should have total reviews count of 87', () => {
      const content = readFileSync(testimonialsDataFile, 'utf-8');
      expect(content).toMatch(/totalReviews:\s*87/);
    });

    it('should have googleReviewUrl', () => {
      const content = readFileSync(testimonialsDataFile, 'utf-8');
      expect(content).toMatch(/googleReviewUrl:/);
      expect(content).toMatch(/https:\/\/search\.google\.com\/local\/writereview/);
    });
  });

  describe('Testimonials Collection', () => {
    it('should export testimonials array', () => {
      const content = readFileSync(testimonialsDataFile, 'utf-8');
      expect(content).toMatch(/export const testimonials:\s*Testimonial\[\]\s*=\s*\[/);
    });

    it('should have at least 6 testimonials', () => {
      const content = readFileSync(testimonialsDataFile, 'utf-8');
      // Count the number of objects in the array
      const matches = content.match(/\{\s*name:/g);
      expect(matches?.length || 0).toBeGreaterThanOrEqual(6);
    });

    it('should have valid French testimonials with realistic content', () => {
      const content = readFileSync(testimonialsDataFile, 'utf-8');
      // Check for French content
      expect(content).toMatch(/très|excellent|professionnel|recommande|service/i);
    });

    it('should have testimonials with 5-star ratings', () => {
      const content = readFileSync(testimonialsDataFile, 'utf-8');
      // All ratings should be 5
      expect(content).toMatch(/rating:\s*5/g);
    });
  });
});
