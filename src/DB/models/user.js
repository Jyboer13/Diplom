'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

// npx sequelize-cli model:generate --name candidate --attributes name:string,about:string,place_of_residence:string,citizenship:string,willingness_to_travel:string,willing_to_relocate:string,vacancy_id:string,salary:string,status_id:string,employment_type_id:string,experience_id:string,education_id:string,languages_id:string,skills_id:string,response_type_id:string,contacts_id:string,project_links:string,manager_id:string
// npx sequelize-cli model:generate --name vacancy --attributes name:string,description:string,direction_id:string,number:string,salary:string,skills_id:string,candidate_type_id:string,manager_id:string
// npx sequelize-cli model:generate --name experience --attributes name:string,start:string,finish:string
// npx sequelize-cli model:generate --name education --attributes name:string,start:string,finish:string
// npx sequelize-cli model:generate --name status --attributes name:string
// npx sequelize-cli model:generate --name employment_type --attributes name:string
// npx sequelize-cli model:generate --name skill --attributes name:string
// npx sequelize-cli model:generate --name language --attributes name:string
// npx sequelize-cli model:generate --name language --attributes name:string
// npx sequelize-cli model:generate --name response_type --attributes name:string
// npx sequelize-cli model:generate --name contacts --attributes name:string, value:string
// npx sequelize-cli model:generate --name candidate_type --attributes name:string
// npx sequelize-cli model:generate --name direction --attributes name:string,description:string
// npx sequelize-cli model:generate --name manager --attributes name:string,email:string,phone:string