import { coinFlips, countFlips } from "./modules/coin.mjs";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const args = require('minimist')(process.argv.slice(2))
const result = coinFlips(args.number);
console.log(result, countFlips(result));