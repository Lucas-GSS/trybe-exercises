/*
  Por padrão a criação de um model no sequelize é por meio de classe que extende comportamento Model,
  porém por ser uma abordagem de POO e ainda não aprendi POO o model abaixo é definido com uma função 
*/

const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
  },
  {
    underscored: true,
    tableName: 'Users',
  });
  return User;
};

module.exports = User