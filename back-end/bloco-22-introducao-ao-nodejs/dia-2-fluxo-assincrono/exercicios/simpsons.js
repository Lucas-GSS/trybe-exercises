const fs = require('fs').promises;

const simpsonsPath = './exercicios/simpsons.json'

const getAllCharacters = async () => {
  const json = await fs.readFile(simpsonsPath);
  const characters = JSON.parse(json);
  return characters;
}

getAllCharacters()
.then((character) => character.forEach(({id, name}) => console.log(`${id} - ${name}`)))
.catch((e) => console.log(e.message))

const getById = async (id) => {
  const characters = await getAllCharacters();
  const chosenCharacter = characters.find((c) => Number(c.id) === id);
  if (!chosenCharacter) return new Error('id não encontrado')
  return chosenCharacter;
}

getById(10)
.then((c) => console.log(c))
.catch((e) => e.message)

const removeIdSixAndTen = async () => {
  const characters = await getAllCharacters();
  const filteredCharacters = characters.filter((c) => Number(c.id) !== 6 && Number(c.id) !== 10);
  await fs.writeFile(simpsonsPath, JSON.stringify(filteredCharacters))
  return filteredCharacters;
}

removeIdSixAndTen()
.then((r) => console.log(r))
.catch((e) => console.log(e.message))

const createNewFile = async () => {
  const characters = await getAllCharacters();
  const filteredCharacters = characters.filter((c) => Number(c.id) >= 1 && Number(c.id) <= 4);
  await fs.writeFile('./exercicios/simpsonsFamily.json' ,JSON.stringify(filteredCharacters), {flag: 'wx'});
  return filteredCharacters
}

createNewFile()
.then((r) => console.log(r))
.catch((e) => console.log(e.message)) 

const simpsonsFamilyPath = './exercicios/simpsonsFamily.json'

const addNelson = async () => {
  const nelsonMuntz = await getById(8);
  const json = await fs.readFile(simpsonsFamilyPath)
  const simpsonsFamily = JSON.parse(json);
  const addNelson = [...simpsonsFamily, nelsonMuntz];
  await fs.writeFile(simpsonsFamilyPath, JSON.stringify(addNelson))
  return addNelson
}

addNelson()
.then((r) => console.log(r))
.catch((e) => console.log(e.message))

const replaceNelson = async () => {
  const maggieSimpson = await getById(5);
  const json = await fs.readFile(simpsonsFamilyPath);
  const simpsonsFamily = JSON.parse(json);
  const indexOfNelson = simpsonsFamily.findIndex(({name}) => name === 'Nelson Muntz');
  simpsonsFamily.splice(indexOfNelson, 1, maggieSimpson)
  await fs.writeFile(simpsonsFamilyPath, JSON.stringify(simpsonsFamily));
  return simpsonsFamily
}

replaceNelson()
.then((s) => console.log(s))
.catch((e) => console.log(e.message))