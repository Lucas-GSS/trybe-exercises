const changeString = (phrase, word) => console.log(phrase.substring(0).replace('x',word));
changeString("Tryber x aqui!","Lucas");

const skills = ['Persistencia', 'Esforço', 'Dedicação', 'Ambição', 'Foco'];

const addSkills = (string, array) => console.log(`Minhas principais habilidades são:${array.sort()}`);
addSkills(changeString("Tryber x aqui!","Lucas"), skills);