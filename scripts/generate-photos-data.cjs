const fs = require('fs');
const path = require('path');

const categories = {
  'hero': 'hero',
  'classique': 'classique',
  'objets-valeur': 'objetsValeur',
  'diogene': 'diogene'
};

const categoryTitles = {
  'hero': 'En Intervention',
  'classique': 'Débarras Classique',
  'objetsValeur': 'Objets de Valeur',
  'diogene': 'Syndrome de Diogène'
};

const photos = [];
const seen = new Set();

// Process each category
for (const [dir, category] of Object.entries(categories)) {
  const dirPath = path.join(__dirname, '..', 'public', 'images', dir);
  
  if (!fs.existsSync(dirPath)) continue;
  
  const files = fs.readdirSync(dirPath)
    .filter(f => f.endsWith('.jpg'))
    // Exclude "Medium" duplicates
    .filter(f => !f.includes('Medium'))
    .sort();
  
  files.forEach(file => {
    // Skip duplicates (without Medium suffix)
    const basename = file.replace('.jpg', '');
    
    // Check if we've seen this photo (without Medium variant)
    if (seen.has(basename)) return;
    
    // Mark as seen
    seen.add(basename);
    
    const webpFile = `${basename}.webp`;
    const webpPath = path.join(dirPath, webpFile);
    
    const photo = {
      src: `/images/${dir}/${file}`,
      alt: `${categoryTitles[category]} - DebarrasPower`,
      category: category,
    };
    
    // Add WebP version if it exists
    if (fs.existsSync(webpPath)) {
      photo.srcWebp = `/images/${dir}/${webpFile}`;
    }
    
    photos.push(photo);
  });
}

// Generate the TypeScript file
const output = `/**
 * Photo data structure and metadata for DebarrasPower
 * Auto-generated from processed photos
 */

export interface Photo {
  src: string;
  srcWebp?: string;
  alt: string;
  category: 'hero' | 'classique' | 'objetsValeur' | 'diogene' | 'team';
}

export const photoCategories = {
  hero: {
    title: "En Intervention",
    description: "Notre équipe en action dans le Var",
    count: ${photos.filter(p => p.category === 'hero').length}
  },
  classique: {
    title: "Débarras Classique",
    description: "Opérations de débarras standard",
    count: ${photos.filter(p => p.category === 'classique').length}
  },
  objetsValeur: {
    title: "Objets de Valeur",
    description: "Biens nécessitant une expertise particulière",
    count: ${photos.filter(p => p.category === 'objetsValeur').length}
  },
  diogene: {
    title: "Syndrome de Diogène",
    description: "Situations complexes avec accompagnement",
    count: ${photos.filter(p => p.category === 'diogene').length}
  },
  team: {
    title: "Notre Équipe",
    description: "Les professionnels DebarrasPower",
    count: 0
  }
} as const;

export type PhotoCategory = keyof typeof photoCategories;

/**
 * All processed client photos (duplicates removed)
 * Total: ${photos.length} photos
 */
export const photos: Photo[] = ${JSON.stringify(photos, null, 2)};

/**
 * Helper function to get photos by category
 */
export function getPhotosByCategory(category: PhotoCategory): Photo[] {
  return photos.filter(photo => photo.category === category);
}

/**
 * Helper function to get category metadata
 */
export function getCategoryInfo(category: PhotoCategory) {
  return photoCategories[category];
}
`;

fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'photos.ts'), output);
console.log(`✅ Generated photos.ts with ${photos.length} unique photos (duplicates removed)`);
