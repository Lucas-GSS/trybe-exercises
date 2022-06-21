const fs = require('fs').promises;

const arrayOfStrings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

Promise.all(
  arrayOfStrings.map(async(string, index) => {
  await fs.writeFile(`./exercicios/file${index}.txt`, string, { flag: 'wx' });
  const content = await fs.readFile(`./exercicios/file${index}.txt`, 'utf-8')
  await fs.appendFile('./exercicios/fileAll.txt', ` ${content}`);
})
)
