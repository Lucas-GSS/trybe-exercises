const simpsons = require('./simpsons.json');

const showCharacters = () => simpsons.map(({ id, name }) => console.log(`${id} - ${name}`));
showCharacters();

const fetchCharacter = (characterId) => {
  const promise = new Promise((resolve, reject) => {
    const isValidId = simpsons.some(({ id }) => parseInt(id) === characterId);
    if(!isValidId) return reject(new Error('Id não encontrado'));
    const character = simpsons.find(({ id }) => parseInt(id) === characterId);
    return resolve(character);
  });
  return promise;
};
fetchCharacter(3)
.then(({id, name}) => console.log(`${id} - ${name}`))
.catch((err) => console.error(err.message))