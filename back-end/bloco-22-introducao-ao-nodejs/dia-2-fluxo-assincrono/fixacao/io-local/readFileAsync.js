const fs = require('fs/promises');

const filePath = './fixacao/io-local/hello.txt';

const readFile = async (filePath) => {
  const content = await fs.readFile(filePath, 'utf-8');
  return content;
}

const fileName = './fixacao/io-local/got.txt'
const content = 'You know nothing Jon Snow';

const writeFile = async (fileName, content) => {
  await fs.writeFile(fileName, content, {flag: 'wx'})
  return `Escrita realizada com sucesso no arquivo: ${fileName}}`;
}

writeFile(fileName, content)
.then((result) => console.log(result))
.catch((e) => console.error(e.message))

Promise.all([readFile(fileName), readFile(filePath)])
.then(([content1, content2]) => console.log(`Arquivo 1: ${content1}; 
Arquivo 2: ${content2}`))
.catch((e) => console.error(e.message));
