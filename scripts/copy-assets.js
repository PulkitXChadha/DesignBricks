const fs = require('fs');
const path = require('path');

const srcAssets = path.join(__dirname, '../src/assets');
const distAssets = path.join(__dirname, '../dist/assets');

console.log('📦 Copying assets...');

// Create dist/assets directory
if (!fs.existsSync(distAssets)) {
  fs.mkdirSync(distAssets, { recursive: true });
  console.log('✓ Created dist/assets directory');
}

// Copy all SVG files
let copiedCount = 0;
fs.readdirSync(srcAssets).forEach(file => {
  if (file.endsWith('.svg')) {
    fs.copyFileSync(
      path.join(srcAssets, file),
      path.join(distAssets, file)
    );
    console.log(`✓ Copied ${file}`);
    copiedCount++;
  }
});

console.log(`\n✨ Successfully copied ${copiedCount} asset(s) to dist/assets/`);

