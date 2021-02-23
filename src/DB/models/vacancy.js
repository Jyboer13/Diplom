'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vacancy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  vacancy.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    direction_id: DataTypes.STRING,
    number: DataTypes.STRING,
    salary: DataTypes.STRING,
    skills_id: DataTypes.STRING,
    candidate_type_id: DataTypes.STRING,
    manager_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'vacancy',
  });
  return vacancy;
};