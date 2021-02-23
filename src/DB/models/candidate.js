'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class candidate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  candidate.init({
    name: DataTypes.STRING,
    about: DataTypes.STRING,
    place_of_residence: DataTypes.STRING,
    citizenship: DataTypes.STRING,
    willingness_to_travel: DataTypes.STRING,
    willing_to_relocate: DataTypes.STRING,
    vacancy_id: DataTypes.STRING,
    salary: DataTypes.STRING,
    status_id: DataTypes.STRING,
    employment_type_id: DataTypes.STRING,
    experience_id: DataTypes.STRING,
    education_id: DataTypes.STRING,
    languages_id: DataTypes.STRING,
    skills_id: DataTypes.STRING,
    response_type_id: DataTypes.STRING,
    contacts_id: DataTypes.STRING,
    project_links: DataTypes.STRING,
    manager_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'candidate',
  });
  return candidate;
};