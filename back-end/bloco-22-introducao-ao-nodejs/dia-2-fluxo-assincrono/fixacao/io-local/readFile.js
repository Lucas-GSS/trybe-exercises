const fs = require('fs');

const filePath = './fixacao/io-local/hello.txt';

const readFile = (filePath) => fs.readFile(filePath, (err, result) => {
  if (err) return console.error(err);
  return console.log(result.toString('utf-8'));
});

readFile(filePath)

