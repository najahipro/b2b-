const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('ffmpeg-static');

// Initialize ffmpeg with the static binary
ffmpeg.setFfmpegPath(ffmpegPath);

const assetsDir = path.join(__dirname, '../public/assets');

async function processMedia() {
  try {
    const files = fs.readdirSync(assetsDir);
    
    // --- 1. Process Images ---
    console.log('--- 🖼️ Processing Images ---');
    for (const file of files) {
      if (file.match(/\.(png|jpe?g)$/i)) {
        const inputPath = path.join(assetsDir, file);
        const fileNameWithoutExt = path.parse(file).name;
        const outputPath = path.join(assetsDir, `${fileNameWithoutExt}.webp`);

        console.log(`Compressing image: ${file} -> ${fileNameWithoutExt}.webp`);
        await sharp(inputPath)
          .resize({ width: 1920, withoutEnlargement: true }) // Prevent upscaling
          .webp({ quality: 80 }) // 80% quality is a great sweet spot for the web
          .toFile(outputPath);
        
        // Delete original image to save space and avoid Vercel timeouts
        fs.unlinkSync(inputPath);
        console.log(`✅ Converted and deleted original: ${file}`);
      }
    }

    // --- 2. Process Videos ---
    console.log('\n--- 🎥 Processing Videos ---');
    for (const file of files) {
      if (file.match(/\.mp4$/i)) {
        const inputPath = path.join(assetsDir, file);
        const fileNameWithoutExt = path.parse(file).name;
        const tempOutputPath = path.join(assetsDir, `${fileNameWithoutExt}-optimized.mp4`);

        console.log(`Compressing video: ${file}... this may take a minute or two.`);

        await new Promise((resolve, reject) => {
          ffmpeg(inputPath)
            .size('?x720') // Scale to maximum 720p height, preserving aspect ratio
            .outputOptions([
              '-vcodec libx264',       // Standard H.264 codec for wide compatibility
              '-crf 28',               // Higher compression (lower file size)
              '-preset fast',          // Compression speed preset
              '-c:a aac',              // AAC audio codec
              '-b:a 128k',             // Compress audio bitrate
              '-movflags +faststart',  // Web optimization (starts playing before full download)
            ])
            .save(tempOutputPath)
            .on('end', () => {
              // Replace the original file with the optimized one
              fs.unlinkSync(inputPath);
              fs.renameSync(tempOutputPath, inputPath);
              console.log(`✅ Compressed, optimized, and replaced original: ${file}`);
              resolve();
            })
            .on('error', (err) => {
              console.error(`❌ Error compressing ${file}:`, err);
              // Clean up incomplete temp file if it exists
              if (fs.existsSync(tempOutputPath)) fs.unlinkSync(tempOutputPath);
              reject(err);
            });
        });
      }
    }
    
    console.log('\n🎉 All media processed successfully!');
  } catch (error) {
    console.error('Error processing media:', error);
  }
}

processMedia();
