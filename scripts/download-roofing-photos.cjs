#!/usr/bin/env node

/**
 * Script to download roofing project photos from Unsplash
 * Usage: node scripts/download-roofing-photos.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Base directories
const baseDir = path.join(__dirname, '..', 'public', 'images');
const categories = {
  charpente: path.join(baseDir, 'charpente'),
  couverture: path.join(baseDir, 'couverture'),
  reparation: path.join(baseDir, 'reparation')
};

// Unsplash image URLs for roofing projects
// Using direct image downloads from Unsplash
const photos = {
  charpente: [
    {
      url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop',
      filename: 'charpente-1.jpg',
      title: 'Charpente bois Toulon',
      description: 'Rénovation complète charpente'
    },
    {
      url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop',
      filename: 'charpente-2.jpg',
      title: 'Charpente métallique',
      description: 'Structure industrielle'
    },
    {
      url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=800&fit=crop',
      filename: 'charpente-3.jpg',
      title: 'Réparation charpente',
      description: 'Renforcement poutres'
    },
    {
      url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop',
      filename: 'charpente-4.jpg',
      title: 'Nouvelle charpente',
      description: 'Construction neuve'
    }
  ],
  couverture: [
    {
      url: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=1200&h=800&fit=crop',
      filename: 'couverture-1.jpg',
      title: 'Toiture tuiles Hyères',
      description: 'Rénovation toiture'
    },
    {
      url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop',
      filename: 'couverture-2.jpg',
      title: 'Toiture ardoises',
      description: 'Pose ardoises naturelles'
    },
    {
      url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop',
      filename: 'couverture-3.jpg',
      title: 'Toiture zinc',
      description: 'Étanchéité zinc'
    },
    {
      url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop',
      filename: 'couverture-4.jpg',
      title: 'Rénovation toiture',
      description: 'Avant / Après'
    }
  ],
  reparation: [
    {
      url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=800&fit=crop',
      filename: 'reparation-1.jpg',
      title: 'Réparation fuite',
      description: 'Intervention urgence'
    },
    {
      url: 'https://images.unsplash.com/photo-1574169208507-84376144848b?w=1200&h=800&fit=crop',
      filename: 'reparation-2.jpg',
      title: 'Remplacement tuiles',
      description: 'Après tempête'
    },
    {
      url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=800&fit=crop',
      filename: 'reparation-3.jpg',
      title: 'Étanchéité',
      description: 'Réseau pluvial'
    },
    {
      url: 'https://images.unsplash.com/photo-1595861970297-8e6385e4ede8?w=1200&h=800&fit=crop',
      filename: 'reparation-4.jpg',
      title: 'Entretien toiture',
      description: 'Nettoyage et vérification'
    }
  ]
};

/**
 * Download a file from URL
 */
function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);

    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);

        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else {
        file.close();
        fs.unlink(destPath, () => {}); // Delete partial file
        reject(new Error(`Failed to download: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      file.close();
      fs.unlink(destPath, () => {}); // Delete partial file
      reject(err);
    });
  });
}

/**
 * Main download function
 */
async function downloadPhotos() {
  console.log('🏠 Downloading roofing photos from Unsplash...\n');

  // Ensure directories exist
  Object.values(categories).forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });

  let totalDownloaded = 0;
  let totalFailed = 0;

  // Download photos for each category
  for (const [category, items] of Object.entries(photos)) {
    console.log(`\n📁 Downloading ${category} photos...`);

    for (const photo of items) {
      const destPath = path.join(categories[category], photo.filename);

      try {
        process.stdout.write(`  ⬇️  ${photo.filename}...`);
        await downloadFile(photo.url, destPath);
        console.log(' ✅');
        totalDownloaded++;
      } catch (error) {
        console.log(' ❌');
        console.error(`    Error: ${error.message}`);
        totalFailed++;
      }
    }
  }

  console.log(`\n\n✨ Download complete!`);
  console.log(`   ✅ Downloaded: ${totalDownloaded} photos`);
  console.log(`   ❌ Failed: ${totalFailed} photos`);
  console.log(`\n📁 Photos saved to: public/images/`);
  console.log(`   - public/images/charpente/ (4 photos)`);
  console.log(`   - public/images/couverture/ (4 photos)`);
  console.log(`   - public/images/reparation/ (4 photos)`);
}

// Run the download
downloadPhotos().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
