'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books',
    [
      {
        title: 'A Sutil Arte de Ligar o Foda-se',
        author: 'Mark Manson',
        page_quantity: 350,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'A Arte da Guerra',
        author: 'Sun Tzu',
        page_quantity: 100,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ],
    {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
