// models/user.js
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
    });
  
    User.associate = (models) => {
      User.hasMany(models.Reservation, {
        foreignKey: 'user_id',
        as: 'reservations',
      });
    };
  
    return User;
  };
  