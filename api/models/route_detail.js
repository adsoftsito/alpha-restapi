'use strict';
module.exports = (sequelize, DataTypes) => {
 
    const route_detail = sequelize.define('route_detail', {


        routedetailid: {
            type: DataTypes.STRING,
            primaryKey: true

          },

        routeid: {
            type: DataTypes.STRING,
            primaryKey: true

          },

          placeid: {
            type: DataTypes.STRING

          },

          status: {
            type: DataTypes.INTEGER

          },
          position: {
                        type: DataTypes.INTEGER
                },
          
        
 }, {
    freezeTableName: true // Model tableName will be the same as the model name
  });
 
  route_detail.associate = function(models) {
 
    route_detail.belongsTo(models.company_place, {
      foreignKey: 'placeid'
    });
  };
  console.log(route_detail);
  return route_detail;
};



  
  
    