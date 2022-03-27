const fs = require('fs');

function getSimpsons() {
  const simpsons = fs.readFileSync('./simpsons.json', 'utf-8');
  return JSON.parse(simpsons);
}

function setSimpsons(datas) {
  const simpson = JSON.stringify(datas);
  fs.writeFileSync('./simpsons.json', simpson);
}

module.exports = { getSimpsons, setSimpsons };
