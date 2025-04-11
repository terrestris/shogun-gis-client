#!/usr/bin/env node

'use strict';

const fs = require('fs-extra');
const path = require('path');
const chokidar = require('chokidar');
const util = require('util');
const throttle = require('lodash/throttle');
const exec = util.promisify(require('child_process').exec);

const curDir = process.cwd();

if (process.argv.length < 3) {
  console.log('Please specify the target path');
  console.log('For example: ../shogun-gis-client-example-plugin/node_modules/@terrestris/shogun-gis-client/');
  process.exit(0);
}

const sourcePath = path.join(curDir, 'src');
const distPath = path.join(curDir, 'dist');
const targetDistPath = path.join(curDir, process.argv[2], 'dist');
const targetSrcPath = path.join(curDir, process.argv[2], 'src');

if (!fs.existsSync(targetDistPath) ) {
  throw new Error('Target path does not exist');
}

async function buildAndCopy() {
  console.log('Run build:dist');

  try {
    const {
      stdout,
      stderr
    } = await exec('npm run build:dist');
    console.log(stdout);
    console.log(stderr);

    console.log(`Copy dist & src from ${curDir} to ${path.join(curDir, process.argv[2])}`);

    await fs.copy(distPath, targetDistPath);
    await fs.copy(sourcePath, targetSrcPath);

    console.log('Done');
  } catch (error) {
    console.log('Error');
    const { stdout, stderr } = error;
    console.log(stdout);
    console.log(stderr);
  }
}

buildAndCopy();

const throttled = throttle(buildAndCopy, 1000);

chokidar.watch(sourcePath)
  .on('add', throttled)
  .on('change', throttled)
  .on('unlink', throttled);
