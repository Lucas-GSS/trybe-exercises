const fs = require('fs');

const readFile = (filePath) => {
  try {
    const conteudo = fs.readFileSync(filePath, 'utf-8');
    return conteudo;
  } catch(error) {
    return null
  }
}

module.exports = readFile;