#!/usr/bin/env node

/**
 * Test script to verify CSS files are properly exported and accessible
 */

const fs = require('fs');
const path = require('path');

console.log('🧪 Testing CSS Distribution...\n');

const distDir = path.join(__dirname, 'dist');
let errors = 0;
let warnings = 0;

// Check if dist exists
if (!fs.existsSync(distDir)) {
  console.error('❌ dist/ directory not found. Run `npm run build` first.');
  process.exit(1);
}

// Test 1: Check global styles exist
console.log('📋 Test 1: Global Styles');
const globalStyles = [
  'dist/styles/global.css',
  'dist/styles/accessibility.css',
];

globalStyles.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    const size = fs.statSync(fullPath).size;
    console.log(`  ✅ ${file} (${size} bytes)`);
  } else {
    console.error(`  ❌ ${file} not found`);
    errors++;
  }
});

// Test 2: Check component CSS files exist
console.log('\n📋 Test 2: Component CSS Files');
const components = [
  'Button',
  'Card',
  'TextField',
  'Alert',
  'Table',
  'Tabs',
  'Typography',
  'Checkbox',
  'Select',
  'LineChart',
];

components.forEach(component => {
  const cssFile = path.join(distDir, 'components', component, `${component}.css`);
  if (fs.existsSync(cssFile)) {
    const size = fs.statSync(cssFile).size;
    console.log(`  ✅ ${component}.css (${size} bytes)`);
  } else {
    console.error(`  ❌ ${component}.css not found`);
    errors++;
  }
});

// Test 3: Verify package.json exports
console.log('\n📋 Test 3: Package.json Exports');
const packageJson = require('./package.json');

if (packageJson.exports) {
  console.log('  ✅ exports field exists');
  
  if (packageJson.exports['./styles/*.css']) {
    console.log('  ✅ ./styles/*.css export configured');
  } else {
    console.error('  ❌ ./styles/*.css export missing');
    errors++;
  }
  
  if (packageJson.exports['./components/*/*.css']) {
    console.log('  ✅ ./components/*/*.css export configured');
  } else {
    console.error('  ❌ ./components/*/*.css export missing');
    errors++;
  }
} else {
  console.error('  ❌ exports field missing from package.json');
  errors++;
}

// Test 4: Count all CSS files
console.log('\n📋 Test 4: CSS File Count');
function countCSS(dir) {
  let count = 0;
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      count += countCSS(fullPath);
    } else if (item.endsWith('.css')) {
      count++;
    }
  });
  
  return count;
}

const cssCount = countCSS(distDir);
console.log(`  Found ${cssCount} CSS files in dist/`);

if (cssCount >= 30) {
  console.log('  ✅ CSS file count looks good');
} else {
  console.warn(`  ⚠️  Expected at least 30 CSS files, found ${cssCount}`);
  warnings++;
}

// Test 5: Check CSS content
console.log('\n📋 Test 5: CSS Content Validation');
const buttonCss = path.join(distDir, 'components/Button/Button.css');
if (fs.existsSync(buttonCss)) {
  const content = fs.readFileSync(buttonCss, 'utf-8');
  if (content.includes('.db-button')) {
    console.log('  ✅ Button.css contains expected classes');
  } else {
    console.error('  ❌ Button.css missing expected classes');
    errors++;
  }
  
  if (content.length > 100) {
    console.log('  ✅ Button.css has content');
  } else {
    console.error('  ❌ Button.css appears empty or too small');
    errors++;
  }
} else {
  console.error('  ❌ Button.css not found for validation');
  errors++;
}

// Test 6: Verify no duplicate CSS files
console.log('\n📋 Test 6: Check for Duplicates');
const cssFiles = [];
function collectCSS(dir, basePath = '') {
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      collectCSS(fullPath, path.join(basePath, item));
    } else if (item.endsWith('.css')) {
      const relativePath = path.join(basePath, item);
      cssFiles.push(relativePath);
    }
  });
}

collectCSS(distDir);
const uniqueFiles = new Set(cssFiles);

if (cssFiles.length === uniqueFiles.size) {
  console.log(`  ✅ No duplicate CSS files (${cssFiles.length} unique files)`);
} else {
  console.error(`  ❌ Found duplicate CSS files (${cssFiles.length} total, ${uniqueFiles.size} unique)`);
  errors++;
}

// Summary
console.log('\n' + '='.repeat(50));
console.log('📊 Test Summary\n');
console.log(`✅ Checks passed: ${6 - errors - warnings}`);
console.log(`❌ Errors: ${errors}`);
console.log(`⚠️  Warnings: ${warnings}`);
console.log(`📦 Total CSS files: ${cssCount}`);

if (errors > 0) {
  console.log('\n❌ CSS distribution tests FAILED');
  process.exit(1);
} else if (warnings > 0) {
  console.log('\n⚠️  CSS distribution tests passed with warnings');
  process.exit(0);
} else {
  console.log('\n✅ All CSS distribution tests PASSED');
  process.exit(0);
}

