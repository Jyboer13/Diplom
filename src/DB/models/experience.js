'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class experience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  experience.init({
    name: DataTypes.STRING,
    start: DataTypes.STRING,
    finish: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'experience',
  });
  return experience;
};