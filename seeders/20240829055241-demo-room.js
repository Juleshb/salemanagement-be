'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Rooms', [
      {
        name: 'Conference Room A',
        location: 'First Floor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Meeting Room B',
        location: 'Second Floor',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rooms', null, {});
  }
};
