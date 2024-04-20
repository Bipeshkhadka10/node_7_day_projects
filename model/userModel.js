const { PASSWORD } = require("../config/dbConfig");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      PASSWORD: {
        type: DataTypes.STRING,
        allowNull : false
      },
      email: {
        type: DataTypes.TEXT,
        allowNull:false
      },
      photo:{
        type : DataTypes.STRING,
        allowNull : true
      }
   
      
    
    });
    return User;
  };