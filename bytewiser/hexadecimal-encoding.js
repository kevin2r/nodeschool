#!/usr/bin/env node

const args = process.argv.slice(2);

console.log( Buffer.from(args).toString('hex') );