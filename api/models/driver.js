'use strict';
module.exports = (sequelize, DataTypes) => {
 
    const driver = sequelize.define('driver', {

        drivercode: {
            type: DataTypes.STRING
          },
          name: {
            type: DataTypes.STRING
          },
          lastname: {
                        type: DataTypes.STRING
                },
          license: {
                  type: DataTypes.STRING
          },
          licensetype: {
              type: DataTypes.STRING
          },
          licensedue: {
              type: DataTypes.STRING
          },
          companyid: {
                        type: DataTypes.STRING
                },
          nfctag: {
                        type: DataTypes.STRING
                },
          email: {
            type: DataTypes.STRING
          },
          password: {
            type: DataTypes.STRING
          }
        
 }, {
    freezeTableName: true // Model tableName will be the same as the model name
  });
 
  /*Console.associate = function(models) {
    Console.hasMany(models.Game, {
      foreignKey: 'consoleId',
      as: 'games'
    });
  };*/
  console.log(driver);
  return driver;
};



  
  
    