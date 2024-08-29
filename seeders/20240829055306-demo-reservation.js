'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reservations', [
      {
        start_time: new Date('2024-08-30 09:00:00'),
        end_time: new Date('2024-08-30 10:00:00'),
        user_id: 1, // Assuming John Doe
        room_id: 1, // Assuming Conference Room A
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        start_time: new Date('2024-08-30 11:00:00'),
        end_time: new Date('2024-08-30 12:00:00'),
        user_id: 2, // Assuming Jane Smith
        room_id: 2, // Assuming Meeting Room B
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reservations', null, {});
  }
};
