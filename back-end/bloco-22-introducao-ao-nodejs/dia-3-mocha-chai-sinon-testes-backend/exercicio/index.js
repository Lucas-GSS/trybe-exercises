const fs = require('fs');

const checkNumber = (number) => {
  if (typeof(number) !== 'number') {
    return 'o valor deve ser um número';
  } else if (number > 0) {
    return 'positivo';
  } else if(number < 0) {
    return 'negativo';
  } else {
    return 'neutro'
  }
}

const writeFile = (fileName, fileContent) => {
    fs.writeFileSync(fileName, fileContent)
    return 'ok'
}

module.exports = { checkNumber, writeFile };
