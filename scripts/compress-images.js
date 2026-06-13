const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, '../public/assets');

async function processImages() {
  try {
    const files = fs.readdirSync(assetsDir);
    
    for (const file of files) {
      if (file.match(/\.(png|jpe?g)$/i)) {
        const inputPath = path.join(assetsDir, file);
        const fileNameWithoutExt = path.parse(file).name;
        const outputPath = path.join(assetsDir, `${fileNameWithoutExt}.webp`);

        console.log(`Processing ${file}...`);

        await sharp(inputPath)
          .resize({ width: 1920, withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(outputPath);

        console.log(`✅ Converted to ${fileNameWithoutExt}.webp`);
        
        // Optional: delete original file to save space
        // fs.unlinkSync(inputPath);
      }
    }
    console.log('🎉 All images processed successfully!');
  } catch (error) {
    console.error('Error processing images:', error);
  }
}

processImages();
