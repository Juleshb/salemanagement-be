// controllers/reservationController.js
const { Reservation, Room } = require('../models');

exports.createReservation = async (req, res) => {
  const { room_id, start_time, end_time } = req.body;

  try {
    const room = await Room.findByPk(room_id);
    if (!room) return res.status(404).json({ error: "Room not found" });

    const overlappingReservations = await Reservation.findOne({
      where: {
        room_id,
        start_time: { [Op.lt]: end_time },
        end_time: { [Op.gt]: start_time },
      },
    });

    if (overlappingReservations) {
      return res.status(400).json({ error: "Room is already booked during this time" });
    }

    const reservation = await Reservation.create(req.body);
    res.status(201).json(reservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
