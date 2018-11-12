'use strict';
module.exports = (sequelize, DataTypes) => {
 
    const driver = sequelize.define('driver', {

          id: {
            type: DataTypes.INTEGER,
          },
          driverid: {
            type: DataTypes.STRING,
            primaryKey: true

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
 
  driver.associate = function(models) {
 
 /*   driver.hasMany(models.order, {
      foreignKey: 'driverid'
    });
*/
  };
  console.log(driver);
  return driver;
};



  
  
    