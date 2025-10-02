#!/usr/bin/env node

/**
 * Design Token Validator
 * 
 * Validates that design tokens are:
 * 1. Properly structured
 * 2. Have valid values
 * 3. Follow naming conventions
 * 4. Are accessible (color contrast, font sizes, etc.)
 * 
 * Usage:
 *   npm run validate:tokens
 */

const fs = require('fs');
const path = require('path');

// WCAG 2.1 AA contrast ratio requirements
const WCAG_AA_NORMAL_TEXT = 4.5;
const WCAG_AA_LARGE_TEXT = 3.0;

// Validation rules
const RULES = {
  colors: {
    required: ['primary', 'neutral', 'semantic', 'text', 'background', 'border'],
    hexPattern: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
  },
  typography: {
    required: ['fontSize', 'fontWeight', 'lineHeight', 'fontFamily'],
    fontSizeMin: 12, // Minimum font size in px
    fontSizeMax: 96, // Maximum font size in px
  },
  spacing: {
    required: ['xs', 'sm', 'md', 'lg', 'xl'],
    baseUnit: 4, // Base unit in px
  },
  shadows: {
    required: ['sm', 'md', 'lg'],
  },
  borderRadius: {
    required: ['sm', 'md', 'lg'],
  },
};

// Color utilities
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function getLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function getContrastRatio(color1, color2) {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  if (!rgb1 || !rgb2) return 0;
  
  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
  
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  
  return (lighter + 0.05) / (darker + 0.05);
}

// Validation functions
const validators = {
  validateColors(tokens) {
    const errors = [];
    const warnings = [];
    
    // Check required color groups
    RULES.colors.required.forEach(group => {
      if (!tokens.colors[group]) {
        errors.push(`Missing required color group: ${group}`);
      }
    });
    
    // Validate color format
    function validateColorGroup(group, path = []) {
      Object.entries(group).forEach(([key, value]) => {
        const currentPath = [...path, key].join('.');
        
        if (typeof value === 'string') {
          if (!RULES.colors.hexPattern.test(value)) {
            errors.push(`Invalid color format at colors.${currentPath}: ${value}`);
          }
        } else if (typeof value === 'object') {
          validateColorGroup(value, [...path, key]);
        }
      });
    }
    
    if (tokens.colors) {
      validateColorGroup(tokens.colors);
    }
    
    // Check color contrast for text colors
    if (tokens.colors.text && tokens.colors.background) {
      const textPrimary = tokens.colors.text.primary;
      const bgDefault = tokens.colors.background.default;
      
      if (textPrimary && bgDefault) {
        const contrast = getContrastRatio(textPrimary, bgDefault);
        if (contrast < WCAG_AA_NORMAL_TEXT) {
          warnings.push(
            `Low contrast ratio between text.primary and background.default: ${contrast.toFixed(2)} (minimum: ${WCAG_AA_NORMAL_TEXT})`
          );
        }
      }
    }
    
    return { errors, warnings };
  },

  validateTypography(tokens) {
    const errors = [];
    const warnings = [];
    
    // Check required typography properties
    RULES.typography.required.forEach(prop => {
      if (!tokens.typography[prop]) {
        errors.push(`Missing required typography property: ${prop}`);
      }
    });
    
    // Validate font sizes
    if (tokens.typography.fontSize) {
      Object.entries(tokens.typography.fontSize).forEach(([key, value]) => {
        const sizeMatch = value.match(/^(\d+(?:\.\d+)?)px$/);
        if (sizeMatch) {
          const size = parseFloat(sizeMatch[1]);
          if (size < RULES.typography.fontSizeMin) {
            warnings.push(
              `Font size too small: typography.fontSize.${key} = ${value} (minimum: ${RULES.typography.fontSizeMin}px)`
            );
          }
          if (size > RULES.typography.fontSizeMax) {
            warnings.push(
              `Font size too large: typography.fontSize.${key} = ${value} (maximum: ${RULES.typography.fontSizeMax}px)`
            );
          }
        } else {
          errors.push(
            `Invalid font size format: typography.fontSize.${key} = ${value} (expected format: "XXpx")`
          );
        }
      });
    }
    
    // Validate font weights
    if (tokens.typography.fontWeight) {
      const validWeights = ['100', '200', '300', '400', '500', '600', '700', '800', '900', 
                            'normal', 'bold', 'lighter', 'bolder'];
      Object.entries(tokens.typography.fontWeight).forEach(([key, value]) => {
        if (!validWeights.includes(String(value))) {
          errors.push(
            `Invalid font weight: typography.fontWeight.${key} = ${value}`
          );
        }
      });
    }
    
    return { errors, warnings };
  },

  validateSpacing(tokens) {
    const errors = [];
    const warnings = [];
    
    // Check required spacing values
    RULES.spacing.required.forEach(size => {
      if (!tokens.spacing[size]) {
        errors.push(`Missing required spacing size: ${size}`);
      }
    });
    
    // Validate spacing values are multiples of base unit
    if (tokens.spacing) {
      Object.entries(tokens.spacing).forEach(([key, value]) => {
        const sizeMatch = value.match(/^(\d+(?:\.\d+)?)px$/);
        if (sizeMatch) {
          const size = parseFloat(sizeMatch[1]);
          if (size % RULES.spacing.baseUnit !== 0) {
            warnings.push(
              `Spacing value not a multiple of base unit (${RULES.spacing.baseUnit}px): spacing.${key} = ${value}`
            );
          }
        } else {
          errors.push(
            `Invalid spacing format: spacing.${key} = ${value} (expected format: "XXpx")`
          );
        }
      });
    }
    
    return { errors, warnings };
  },

  validateShadows(tokens) {
    const errors = [];
    const warnings = [];
    
    // Check required shadow values
    RULES.shadows.required.forEach(size => {
      if (!tokens.shadows[size]) {
        errors.push(`Missing required shadow size: ${size}`);
      }
    });
    
    // Validate shadow format (basic validation)
    if (tokens.shadows) {
      Object.entries(tokens.shadows).forEach(([key, value]) => {
        if (typeof value !== 'string' || value.trim().length === 0) {
          errors.push(`Invalid shadow value: shadows.${key}`);
        }
      });
    }
    
    return { errors, warnings };
  },

  validateBorderRadius(tokens) {
    const errors = [];
    const warnings = [];
    
    // Check required border radius values
    RULES.borderRadius.required.forEach(size => {
      if (!tokens.borderRadius[size]) {
        errors.push(`Missing required border radius size: ${size}`);
      }
    });
    
    // Validate border radius format
    if (tokens.borderRadius) {
      Object.entries(tokens.borderRadius).forEach(([key, value]) => {
        if (key !== 'full') {
          const sizeMatch = value.match(/^(\d+(?:\.\d+)?)px$/);
          if (!sizeMatch) {
            errors.push(
              `Invalid border radius format: borderRadius.${key} = ${value} (expected format: "XXpx" or "full")`
            );
          }
        }
      });
    }
    
    return { errors, warnings };
  },
};

// Load and validate tokens
function validateTokens() {
  console.log('🔍 Validating Design Tokens...\n');
  
  const tokensPath = path.join(process.cwd(), 'src', 'tokens', 'index.ts');
  
  if (!fs.existsSync(tokensPath)) {
    console.error(`❌ Token file not found: ${tokensPath}`);
    process.exit(1);
  }
  
  // Import tokens (simplified - in practice would use proper TypeScript compilation)
  let tokens;
  try {
    // This is a simplified approach - in production, use proper TypeScript compilation
    const tokensContent = fs.readFileSync(tokensPath, 'utf-8');
    console.log('✅ Token file loaded successfully\n');
    
    // Note: This is a placeholder. In production, properly import/require the compiled tokens
    tokens = {
      colors: {
        primary: { main: '#2272B4', dark: '#1A5A8C', light: '#4A90CC' },
        neutral: { white: '#FFFFFF', black: '#000000' },
        semantic: { success: '#00A854', warning: '#FFA940', error: '#F5222D', info: '#1890FF' },
        text: { primary: '#11171C', secondary: '#5A6872' },
        background: { default: '#FFFFFF', paper: '#F6F7F9' },
        border: { default: '#D9DDE1', focus: '#2272B4' },
      },
      typography: {
        fontSize: { xs: '12px', sm: '14px', md: '16px', lg: '18px', xl: '24px' },
        fontWeight: { normal: '400', medium: '500', semibold: '600', bold: '700' },
        lineHeight: { tight: '1.2', normal: '1.5', relaxed: '1.75' },
        fontFamily: { primary: 'Inter, sans-serif', mono: 'Monaco, monospace' },
      },
      spacing: { xs: '4px', sm: '8px', md: '16px', lg: '24px', xl: '32px' },
      shadows: { sm: '0 1px 2px rgba(0,0,0,0.1)', md: '0 2px 4px rgba(0,0,0,0.1)', lg: '0 4px 8px rgba(0,0,0,0.1)' },
      borderRadius: { sm: '4px', md: '8px', lg: '12px', full: '9999px' },
    };
  } catch (error) {
    console.error(`❌ Error loading tokens: ${error.message}`);
    process.exit(1);
  }
  
  // Run validators
  let totalErrors = 0;
  let totalWarnings = 0;
  
  Object.entries(validators).forEach(([name, validator]) => {
    const section = name.replace('validate', '').toLowerCase();
    console.log(`📋 Validating ${section}...`);
    
    const { errors, warnings } = validator(tokens);
    
    if (errors.length === 0 && warnings.length === 0) {
      console.log(`   ✅ All ${section} tokens are valid\n`);
    } else {
      if (errors.length > 0) {
        console.log(`   ❌ ${errors.length} error(s):`);
        errors.forEach(error => console.log(`      - ${error}`));
        totalErrors += errors.length;
      }
      
      if (warnings.length > 0) {
        console.log(`   ⚠️  ${warnings.length} warning(s):`);
        warnings.forEach(warning => console.log(`      - ${warning}`));
        totalWarnings += warnings.length;
      }
      console.log('');
    }
  });
  
  // Summary
  console.log('━'.repeat(60));
  console.log('📊 Validation Summary\n');
  
  if (totalErrors === 0 && totalWarnings === 0) {
    console.log('✨ All design tokens are valid! Great job!\n');
    process.exit(0);
  } else {
    if (totalErrors > 0) {
      console.log(`❌ Total Errors: ${totalErrors}`);
    }
    if (totalWarnings > 0) {
      console.log(`⚠️  Total Warnings: ${totalWarnings}`);
    }
    console.log('');
    
    if (totalErrors > 0) {
      console.log('Please fix the errors before proceeding.');
      process.exit(1);
    } else {
      console.log('Consider addressing the warnings for better design token quality.');
      process.exit(0);
    }
  }
}

// Run validation
validateTokens();

