const fs = require('fs');

const filePath = './fixacao/io-local/hello.txt';

try {
  const content = fs.readFileSync(filePath, 'utf-8');
  console.log(content);
} catch(err) {
  console.error(err.message);
}

