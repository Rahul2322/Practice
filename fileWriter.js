const fs  = require('fs');

const writableStream = fs.createWriteStream('log.txt');
process.stdin.pipe(writableStream) //here process.stdin is readable stream and from terminal we can write directly into file