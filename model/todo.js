module.exports = (sequelize, DataTypes) => {
    const  todo= sequelize.define("todo", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull : true
      },
      description: {
        type: DataTypes.TEXT,
        allowNull:false
      },

      imageUrl: {
        type: DataTypes.STRING,
        allowNull : true
      }
      
      
    });
    return todo;
  };