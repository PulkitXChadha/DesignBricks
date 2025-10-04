#!/usr/bin/env node

/**
 * CI Validation and Auto-Fix Script
 * 
 * This script simulates all GitHub Actions CI steps locally and attempts to fix issues.
 * It's designed to catch and resolve problems before pushing to remote.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// ANSI color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

// Configuration
const config = {
  skipInstall: process.argv.includes('--skip-install'),
  fixIssues: !process.argv.includes('--no-fix'),
  verbose: process.argv.includes('--verbose'),
  skipTests: process.argv.includes('--skip-tests'),
  skipSecurity: process.argv.includes('--skip-security'),
};

// Results tracking
const results = {
  passed: [],
  failed: [],
  fixed: [],
  skipped: [],
};

/**
 * Print formatted message
 */
function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

/**
 * Print section header
 */
function logSection(title) {
  console.log('\n' + '='.repeat(80));
  log(`  ${title}`, 'cyan');
  console.log('='.repeat(80) + '\n');
}

/**
 * Print step header
 */
function logStep(step, total) {
  log(`\n[${step}/${total}] `, 'blue');
}

/**
 * Execute command and handle errors
 */
function runCommand(command, options = {}) {
  const { 
    successMessage = 'Command executed successfully',
    errorMessage = 'Command failed',
    canFix = false,
    fixCommand = null,
    stepName = 'Unknown step',
    allowFailure = false,
  } = options;

  try {
    if (config.verbose) {
      log(`  Running: ${command}`, 'yellow');
    }
    
    execSync(command, { 
      stdio: config.verbose ? 'inherit' : 'pipe',
      encoding: 'utf-8',
    });
    
    log(`  ✓ ${successMessage}`, 'green');
    results.passed.push(stepName);
    return true;
  } catch (error) {
    log(`  ✗ ${errorMessage}`, 'red');
    
    if (config.verbose && error.stdout) {
      console.log(error.stdout);
    }
    if (error.stderr) {
      log(`  Error: ${error.stderr}`, 'red');
    }

    // Attempt to fix if configured and fix command provided
    if (config.fixIssues && canFix && fixCommand) {
      log(`  → Attempting to fix...`, 'yellow');
      try {
        execSync(fixCommand, { 
          stdio: config.verbose ? 'inherit' : 'pipe',
          encoding: 'utf-8',
        });
        log(`  ✓ Fixed successfully`, 'green');
        results.fixed.push(stepName);
        
        // Retry original command
        try {
          execSync(command, { stdio: 'pipe' });
          log(`  ✓ Verification passed`, 'green');
          return true;
        } catch (retryError) {
          log(`  ✗ Verification failed after fix`, 'red');
          results.failed.push(stepName);
          return allowFailure;
        }
      } catch (fixError) {
        log(`  ✗ Fix failed`, 'red');
        if (config.verbose && fixError.stderr) {
          log(`  Error: ${fixError.stderr}`, 'red');
        }
        results.failed.push(stepName);
        return allowFailure;
      }
    }

    results.failed.push(stepName);
    return allowFailure;
  }
}

/**
 * Check if node_modules exists
 */
function checkNodeModules() {
  const nodeModulesPath = path.join(process.cwd(), 'node_modules');
  return fs.existsSync(nodeModulesPath);
}

/**
 * Main CI check function
 */
async function checkCI() {
  log('\n🚀 DesignBricks CI Validation Script', 'bright');
  log('════════════════════════════════════\n', 'cyan');

  if (config.skipInstall) {
    log('ℹ  Skipping dependency installation (--skip-install)', 'yellow');
  }
  if (!config.fixIssues) {
    log('ℹ  Auto-fix disabled (--no-fix)', 'yellow');
  }
  if (config.skipTests) {
    log('ℹ  Skipping tests (--skip-tests)', 'yellow');
  }
  if (config.skipSecurity) {
    log('ℹ  Skipping security audit (--skip-security)', 'yellow');
  }

  let currentStep = 0;
  const totalSteps = 8 - (config.skipTests ? 1 : 0) - (config.skipSecurity ? 2 : 0);

  // Step 1: Install dependencies
  if (!config.skipInstall || !checkNodeModules()) {
    logSection('📦 Step 1: Installing Dependencies');
    currentStep++;
    logStep(currentStep, totalSteps);
    
    const success = runCommand('npm ci', {
      successMessage: 'Dependencies installed',
      errorMessage: 'Failed to install dependencies',
      stepName: 'Install Dependencies',
    });

    if (!success) {
      log('\n❌ Cannot proceed without dependencies. Exiting.', 'red');
      process.exit(1);
    }
  } else {
    results.skipped.push('Install Dependencies');
  }

  // Step 2: Linting
  logSection('🔍 Step 2: Linting');
  currentStep++;
  logStep(currentStep, totalSteps);
  
  runCommand('npm run lint', {
    successMessage: 'Linting passed',
    errorMessage: 'Linting failed',
    canFix: true,
    fixCommand: 'npm run lint:fix',
    stepName: 'Linting',
  });

  // Step 3: Type checking
  logSection('📘 Step 3: Type Checking');
  currentStep++;
  logStep(currentStep, totalSteps);
  
  runCommand('npm run type-check', {
    successMessage: 'Type checking passed',
    errorMessage: 'Type checking failed',
    stepName: 'Type Checking',
  });

  // Step 4: Tests
  if (!config.skipTests) {
    logSection('🧪 Step 4: Running Tests');
    currentStep++;
    logStep(currentStep, totalSteps);
    
    runCommand('npm run test:ci', {
      successMessage: 'All tests passed',
      errorMessage: 'Some tests failed',
      stepName: 'Tests',
    });
  }

  // Step 5: Build
  logSection('🏗️  Step 5: Building Package');
  currentStep++;
  logStep(currentStep, totalSteps);
  
  const buildSuccess = runCommand('npm run build', {
    successMessage: 'Build completed successfully',
    errorMessage: 'Build failed',
    stepName: 'Build',
  });

  if (buildSuccess) {
    // Verify build output
    const distPath = path.join(process.cwd(), 'dist');
    if (fs.existsSync(distPath)) {
      log('  ✓ Build output verified', 'green');
    } else {
      log('  ✗ Build output missing', 'red');
      results.failed.push('Build Output Verification');
    }
  }

  // Step 6: Bundle size check
  logSection('📊 Step 6: Checking Bundle Size');
  currentStep++;
  logStep(currentStep, totalSteps);
  
  log('  ⚠️  Bundle size check may fail due to configuration issues', 'yellow');
  runCommand('npm run size', {
    successMessage: 'Bundle size check passed',
    errorMessage: 'Bundle size check failed (this is a known configuration issue, not a code issue)',
    stepName: 'Bundle Size',
    allowFailure: true, // Bundle size has configuration issues
  });

  // Step 7: Storybook build
  logSection('📚 Step 7: Building Storybook');
  currentStep++;
  logStep(currentStep, totalSteps);
  
  log('  ⚠️  Storybook build may have warnings (known Vite CJS deprecation)', 'yellow');
  const storybookSuccess = runCommand('npm run build-storybook', {
    successMessage: 'Storybook built successfully',
    errorMessage: 'Storybook build failed (check for configuration issues)',
    stepName: 'Storybook Build',
    allowFailure: true, // Known Vite CJS deprecation warning
  });

  if (storybookSuccess) {
    // Verify storybook output
    const storybookPath = path.join(process.cwd(), 'storybook-static');
    if (fs.existsSync(storybookPath)) {
      log('  ✓ Storybook output verified', 'green');
    } else {
      log('  ✗ Storybook output missing', 'red');
    }
  }

  // Step 8: Security audit
  if (!config.skipSecurity) {
    logSection('🔒 Step 8: Security Audit');
    currentStep++;
    logStep(currentStep, totalSteps);
    
    log('  Running npm audit...', 'yellow');
    runCommand('npm audit --audit-level=moderate', {
      successMessage: 'No moderate or higher vulnerabilities found',
      errorMessage: 'Security vulnerabilities detected',
      stepName: 'NPM Audit',
      allowFailure: true, // Don't fail CI on audit issues
    });

    log('\n  Running audit-ci...', 'yellow');
    runCommand('npx audit-ci --moderate', {
      successMessage: 'audit-ci passed',
      errorMessage: 'audit-ci detected issues',
      stepName: 'Audit CI',
      allowFailure: true,
    });
  }

  // Print summary
  printSummary();
}

/**
 * Print final summary
 */
function printSummary() {
  logSection('📋 Summary');

  const total = results.passed.length + results.failed.length + results.fixed.length;
  const successRate = total > 0 ? ((results.passed.length + results.fixed.length) / total * 100).toFixed(1) : 0;

  if (results.passed.length > 0) {
    log(`\n✅ Passed (${results.passed.length}):`, 'green');
    results.passed.forEach(step => log(`   • ${step}`, 'green'));
  }

  if (results.fixed.length > 0) {
    log(`\n🔧 Fixed (${results.fixed.length}):`, 'yellow');
    results.fixed.forEach(step => log(`   • ${step}`, 'yellow'));
  }

  if (results.skipped.length > 0) {
    log(`\n⏭️  Skipped (${results.skipped.length}):`, 'cyan');
    results.skipped.forEach(step => log(`   • ${step}`, 'cyan'));
  }

  if (results.failed.length > 0) {
    log(`\n❌ Failed (${results.failed.length}):`, 'red');
    results.failed.forEach(step => log(`   • ${step}`, 'red'));
  }

  console.log('\n' + '─'.repeat(80));
  log(`\n📊 Overall Success Rate: ${successRate}%`, 'bright');
  
  if (results.failed.length === 0) {
    log('\n🎉 All CI checks passed! Ready to push.', 'green');
    console.log('\n' + '═'.repeat(80) + '\n');
    process.exit(0);
  } else {
    log('\n⚠️  Some checks failed. Please review and fix the issues above.', 'yellow');
    console.log('\n' + '═'.repeat(80) + '\n');
    log('💡 Tips:', 'cyan');
    log('   • Run with --verbose to see detailed output', 'cyan');
    log('   • Run with --skip-tests to skip test execution', 'cyan');
    log('   • Run with --skip-security to skip security checks', 'cyan');
    log('   • Run with --no-fix to disable auto-fixing', 'cyan');
    console.log('\n');
    process.exit(1);
  }
}

/**
 * Handle script interruption
 */
process.on('SIGINT', () => {
  log('\n\n⚠️  Script interrupted by user', 'yellow');
  printSummary();
  process.exit(1);
});

// Run the CI check
checkCI().catch(error => {
  log(`\n❌ Unexpected error: ${error.message}`, 'red');
  if (config.verbose) {
    console.error(error);
  }
  process.exit(1);
});
