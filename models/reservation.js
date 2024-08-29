// models/reservation.js
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    start_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  Reservation.associate = (models) => {
    Reservation.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
    Reservation.belongsTo(models.Room, {
      foreignKey: 'room_id',
      as: 'room',
    });
  };

  return Reservation;
};
