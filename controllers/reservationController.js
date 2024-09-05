// controllers/reservationController.js
const { Reservation, Room } = require('../models');
const { Op } = require('sequelize');

// Create a new Reservation
exports.createReservation = async (req, res) => {
  const { room_id, start_time, end_time } = req.body;

  try {
    const room = await Room.findByPk(room_id);
    if (!room) return res.status(404).json({ error: "Room not found" });

    // Check if the room is available during the given time
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

    // Create the reservation
    const reservation = await Reservation.create(req.body);
    res.status(201).json(reservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all Reservations
exports.getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.findAll({ include: [Room] });
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single Reservation by ID
exports.getReservationById = async (req, res) => {
  const { id } = req.params;
  
  try {
    const reservation = await Reservation.findByPk(id, { include: [Room] });
    if (!reservation) {
      return res.status(404).json({ error: "Reservation not found" });
    }
    res.status(200).json(reservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a Reservation by ID
exports.updateReservation = async (req, res) => {
  const { id } = req.params;
  const { room_id, start_time, end_time } = req.body;

  try {
    const reservation = await Reservation.findByPk(id);
    if (!reservation) {
      return res.status(404).json({ error: "Reservation not found" });
    }

    // Check if the room exists
    const room = await Room.findByPk(room_id);
    if (!room) return res.status(404).json({ error: "Room not found" });

    // Check if the new time slot is available
    const overlappingReservations = await Reservation.findOne({
      where: {
        room_id,
        start_time: { [Op.lt]: end_time },
        end_time: { [Op.gt]: start_time },
        id: { [Op.ne]: id }, // Exclude the current reservation
      },
    });

    if (overlappingReservations) {
      return res.status(400).json({ error: "Room is already booked during this time" });
    }

    // Update the reservation
    await reservation.update(req.body);
    res.status(200).json(reservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a Reservation by ID
exports.deleteReservation = async (req, res) => {
  const { id } = req.params;

  try {
    const reservation = await Reservation.findByPk(id);
    if (!reservation) {
      return res.status(404).json({ error: "Reservation not found" });
    }

    await reservation.destroy();
    res.status(200).json({ message: "Reservation deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
