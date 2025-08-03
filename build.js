#!/usr/bin/env node

// Simple build script for Render deployment
import { execSync } from 'child_process';
import fs from 'fs';

console.log('Starting CarePlus build process...');

try {
  // Build frontend
  console.log('Building frontend...');
  execSync('vite build', { stdio: 'inherit' });

  // Build backend with explicit esbuild install
  console.log('Building backend...');
  execSync('npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist', { stdio: 'inherit' });

  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}