const fs = require('fs');
const path = require('path');

console.log('📦 Copying assets and styles...');

// Copy SVG assets
const srcAssets = path.join(__dirname, '../src/assets');
const distAssets = path.join(__dirname, '../dist/assets');

if (!fs.existsSync(distAssets)) {
  fs.mkdirSync(distAssets, { recursive: true });
  console.log('✓ Created dist/assets directory');
}

let svgCount = 0;
fs.readdirSync(srcAssets).forEach(file => {
  if (file.endsWith('.svg')) {
    fs.copyFileSync(
      path.join(srcAssets, file),
      path.join(distAssets, file)
    );
    console.log(`✓ Copied ${file}`);
    svgCount++;
  }
});

// Copy CSS files from src to dist
const srcDir = path.join(__dirname, '../src');
const distDir = path.join(__dirname, '../dist');

function copyCSS(srcPath, destPath) {
  let cssCount = 0;
  
  if (fs.existsSync(srcPath)) {
    const items = fs.readdirSync(srcPath);
    
    items.forEach(item => {
      const srcItemPath = path.join(srcPath, item);
      const destItemPath = path.join(destPath, item);
      const stat = fs.statSync(srcItemPath);
      
      if (stat.isDirectory()) {
        // Create directory in dist if it doesn't exist
        if (!fs.existsSync(destItemPath)) {
          fs.mkdirSync(destItemPath, { recursive: true });
        }
        // Recursively copy CSS from subdirectories
        cssCount += copyCSS(srcItemPath, destItemPath);
      } else if (item.endsWith('.css')) {
        fs.copyFileSync(srcItemPath, destItemPath);
        console.log(`✓ Copied CSS: ${path.relative(srcDir, srcItemPath)}`);
        cssCount++;
      }
    });
  }
  
  return cssCount;
}

const cssCount = copyCSS(srcDir, distDir);

console.log(`\n✨ Successfully copied:`);
console.log(`   - ${svgCount} SVG asset(s)`);
console.log(`   - ${cssCount} CSS file(s)`);

