#!/usr/bin/env node
import { program } from 'commander';
import { key } from './commands/key.js';

program
    .command('set')
    .description('Set API key -- Get at https://freecryptoapi.com')
    .action(key.set);

program
    .command('show')
    .description('Show API key')
    .action(key.show);

program
    .command('remove')
    .description('Remove API key')
    .action(key.remove);

program.parse(process.agrv);