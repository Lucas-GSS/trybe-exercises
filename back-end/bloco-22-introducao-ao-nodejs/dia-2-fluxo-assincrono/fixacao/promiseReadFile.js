const fs = require('fs');

function readFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });
  }); 
}

readFile('ola.txt')
  .then((content) => console.log(`Conteúdo do arquivo: ${content.toString('utf-8')}`))
  .catch((e) => console.error(e.message))