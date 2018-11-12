'use strict';
module.exports = (sequelize, DataTypes) => {
 
    const route = sequelize.define('route', {

      id: {
        type: DataTypes.INTEGER,
      },
        routeid: {
            type: DataTypes.STRING,
            primaryKey: true

          },

          companyid: {
            type: DataTypes.STRING

          },

          customerid: {
            type: DataTypes.STRING

          },
          placesource: {
                        type: DataTypes.STRING
                },
          placetarget: {
                  type: DataTypes.STRING
          }
        
 }, {
    freezeTableName: true // Model tableName will be the same as the model name
  });
 
  route.associate = function(models) {
 
    route.hasMany(models.route_detail, {
      foreignKey: 'routeid'
    });

  };
  console.log(route);
  return route;
};



  
  
    