const employeesData = fullName => ({nomeCompleto: fullName, email: fullName.toLowerCase().split(' ').join('_') + '@trybe.com',});

const newEmployees = () => {
  const employees = {
    id1: employeesData('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: employeesData('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: employeesData('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
console.log(newEmployees());