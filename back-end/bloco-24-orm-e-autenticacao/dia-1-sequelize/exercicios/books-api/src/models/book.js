const sequelize = require('sequelize');
const {
  DataTypes
} = require('sequelize');
/**
 * @param {import('sequelize').DataTypes} DataTypes
 */
const attributes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  author: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  pageQuantity: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
  }
};

/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 */

module.exports = (sequelize) => {
  const Book = sequelize.define(
    'Book',
    attributes, {
      underscored: true,
      tableName: 'Books'
    }
  );
  return Book;
}