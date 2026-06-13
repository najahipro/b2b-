const fs = require('fs');
const path = require('path');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('ffmpeg-static');

// Set the ffmpeg path to the statically linked binary
ffmpeg.setFfmpegPath(ffmpegPath);

const assetsDir = path.join(__dirname, '../public/assets');

async function processVideos() {
  try {
    const files = fs.readdirSync(assetsDir);
    
    for (const file of files) {
      // Find all mp4 files that haven't been compressed yet
      if (file.match(/\.mp4$/i) && !file.includes('-compressed')) {
        const inputPath = path.join(assetsDir, file);
        const fileNameWithoutExt = path.parse(file).name;
        const outputPath = path.join(assetsDir, `${fileNameWithoutExt}-compressed.mp4`);

        console.log(`Processing video: ${file}...`);

        await new Promise((resolve, reject) => {
          ffmpeg(inputPath)
            .outputOptions([
              '-vcodec libx264',       // Standard H.264 codec for wide compatibility
              '-crf 28',               // Constant Rate Factor (lower is better quality, 23 is default, 28 compresses more)
              '-preset fast',          // Compression speed preset
              '-c:a aac',              // AAC audio codec
              '-b:a 128k',             // 128kbps audio bitrate
              '-movflags +faststart',  // Moves MOOV atom to the beginning of the file for faster web playback
            ])
            .save(outputPath)
            .on('end', () => {
              console.log(`✅ Compressed to ${fileNameWithoutExt}-compressed.mp4`);
              resolve();
            })
            .on('error', (err) => {
              console.error(`❌ Error compressing ${file}:`, err);
              reject(err);
            });
        });
      }
    }
    console.log('🎉 All videos processed successfully!');
  } catch (error) {
    console.error('Error processing videos:', error);
  }
}

processVideos();
