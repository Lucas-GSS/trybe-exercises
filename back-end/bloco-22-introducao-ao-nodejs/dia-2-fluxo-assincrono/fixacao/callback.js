const fs = require('fs');

fs.readFile('./note.txt', (error, content) => {
  if (error) return console.error(`Erro ao ler aqruivo: ${error.message}`);
  if (content) return console.log(`Conteúdo do arquivo: ${content.toString('utf-8')}`);
});
