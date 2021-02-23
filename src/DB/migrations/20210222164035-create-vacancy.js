'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('vacancies', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      direction_id: {
        type: Sequelize.STRING
      },
      number: {
        type: Sequelize.STRING
      },
      salary: {
        type: Sequelize.STRING
      },
      skills_id: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      candidate_type_id: {
        type: Sequelize.STRING
      },
      manager_id: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('vacancies');
  }
};