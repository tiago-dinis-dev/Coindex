#!/usr/bin/env node
import { program } from 'commander';
import { readFile } from 'fs/promises';
import dotenv from 'dotenv';

dotenv.config();

const pkg = JSON.parse(
  await readFile(new URL('../package.json', import.meta.url))
);

program
    .version(pkg.version)
    .command('key', 'Manage API key -- https://freecryptoapi.com')
    .command('check', 'Check Coin price Info')
    .description('Coindex CLI Tool')
    .parse(process.argv);