import { program } from 'commander';
import { check } from './commands/check.js';

program
    .command('price')
    .description('Check price of coin')
    .option('--coin <type>', 'Specify the coin to check', 'BTC')
    .action(cmd => check.price(cmd))
    .parse(process.argv);