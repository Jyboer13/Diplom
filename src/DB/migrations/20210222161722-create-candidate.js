'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('candidates', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      about: {
        type: Sequelize.STRING
      },
      place_of_residence: {
        type: Sequelize.STRING
      },
      citizenship: {
        type: Sequelize.STRING
      },
      willingness_to_travel: {
        type: Sequelize.STRING
      },
      willing_to_relocate: {
        type: Sequelize.STRING
      },
      vacancy_id: {
        type: Sequelize.STRING
      },
      salary: {
        type: Sequelize.STRING
      },
      status_id: {
        type: Sequelize.STRING
      },
      employment_type_id: {
        type: Sequelize.STRING
      },
      experience_id: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      education_id: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      languages_id: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      skills_id: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      response_type_id: {
        type: Sequelize.STRING
      },
      contacts_id: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      project_links: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      manager_id: {
        type: Sequelize.STRING
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('candidates');
  }
};