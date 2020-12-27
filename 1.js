#!/usr/bin/env node

console.log('hey')
console.log(process.env);


const fs = require('fs');

fs.readdir('/usr/src/app/', (err, files) => {
    files.forEach(file => {
      console.log(file);
    });
  });
