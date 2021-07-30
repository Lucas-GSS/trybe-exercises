const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

 const addTurno = (lesson2, key, value) => lesson2[key] = value;
addTurno(lesson2, 'turno', 'manhã');

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

 const listKeys = obj => console.log(Object.keys(obj));
listKeys(lesson3);

const lengthObj = obj => console.log(Object.keys(obj).length);
lengthObj(lesson3);

const valuesObj = obj => console.log(Object.values(obj));
valuesObj(lesson3);

const allLessons = {
  lesson1: {},
  lesson2: {},
  lesson3: {},
}

const makeObj = (allLessons, lesson1, lesson2, lesson3) => {
  Object.assign(allLessons.lesson1, lesson1);
  Object.assign(allLessons.lesson2, lesson2);
  Object.assign(allLessons.lesson3, lesson3)
  console.log(allLessons);
}
makeObj(allLessons, lesson1, lesson2, lesson3);

const numberOfStudents = allLessons => console.log(`Número Total de Estudantes: ${allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes}`);
numberOfStudents(allLessons);