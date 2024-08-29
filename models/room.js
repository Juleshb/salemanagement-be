// models/room.js
module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define('Room', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Room.associate = (models) => {
    Room.hasMany(models.Reservation, {
      foreignKey: 'room_id',
      as: 'reservations',
    });
  };

  return Room;
};
