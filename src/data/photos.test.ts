import { describe, it, expect } from 'vitest';
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';

const projectRoot = process.cwd();
const publicImagesDir = join(projectRoot, 'public', 'images');
const photosDataFile = join(projectRoot, 'src', 'data', 'photos.ts');

describe('Photo Processing Infrastructure', () => {
  describe('Directory Structure', () => {
    const requiredDirs = [
      'hero',
      'classique',
      'objets-valeur',
      'diogene',
      'team',
      'before-after'
    ];

    requiredDirs.forEach(dir => {
      it(`should have ${dir} directory`, () => {
        const dirPath = join(publicImagesDir, dir);
        expect(existsSync(dirPath), `${dir} directory should exist`).toBe(true);
      });

      it(`should have README.md in ${dir} directory`, () => {
        const readmePath = join(publicImagesDir, dir, 'README.md');
        expect(existsSync(readmePath), `README.md in ${dir} should exist`).toBe(true);
      });

      it(`should have valid README.md content in ${dir}`, () => {
        const readmePath = join(publicImagesDir, dir, 'README.md');
        const content = readFileSync(readmePath, 'utf-8');

        // Check for optimization specifications
        expect(content).toMatch(/optimization|specification|taille|dimensions/i);
        expect(content.length).toBeGreaterThan(50);
      });
    });
  });

  describe('Photos Data File', () => {
    it('should have photos.ts file', () => {
      expect(existsSync(photosDataFile), 'photos.ts should exist').toBe(true);
    });

    it('should export Photo interface', () => {
      const content = readFileSync(photosDataFile, 'utf-8');
      expect(content).toMatch(/export interface Photo/);
    });

    it('should have required Photo properties', () => {
      const content = readFileSync(photosDataFile, 'utf-8');
      expect(content).toMatch(/src:\s*string/);
      expect(content).toMatch(/alt:\s*string/);
      expect(content).toMatch(/category:/);
    });

    it('should export photoCategories', () => {
      const content = readFileSync(photosDataFile, 'utf-8');
      expect(content).toMatch(/export const photoCategories/);
    });

    it('should export photos array', () => {
      const content = readFileSync(photosDataFile, 'utf-8');
      expect(content).toMatch(/export const photos:\s*Photo\[\]\s*=\s*\[/);
    });
  });

  describe('Photo Categories', () => {
    it('should have all required categories', () => {
      const content = readFileSync(photosDataFile, 'utf-8');
      const requiredCategories = ['hero', 'classique', 'objetsValeur', 'diogene', 'team'];

      requiredCategories.forEach(category => {
        expect(content).toMatch(new RegExp(`'${category}'|"${category}"`));
      });
    });

    it('should have category metadata with title, description, and count', () => {
      const content = readFileSync(photosDataFile, 'utf-8');
      expect(content).toMatch(/title:/);
      expect(content).toMatch(/description:/);
      expect(content).toMatch(/count:/);
    });
  });
});
