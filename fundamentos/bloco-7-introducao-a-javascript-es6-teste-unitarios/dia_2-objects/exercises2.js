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

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurno = (lesson2, key, value) => lesson2[key] = value;
addTurno(lesson2, 'turno', 'manhã');

const listKeys = obj => console.log(Object.keys(obj));
listKeys(lesson3);

const lengthObj = obj => console.log(Object.keys(obj).length);
lengthObj(lesson3);