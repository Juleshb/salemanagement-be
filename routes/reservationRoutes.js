// routes/reservationRoutes.js
const express = require('express');
const router = express.Router();
const {
  createReservation,
  getAllReservations,
  getReservationById,
  updateReservation,
  deleteReservation
} = require('../controllers/reservationController');

// CRUD routes
router.post('/', createReservation);        // Create a new reservation
router.get('/', getAllReservations);        // Get all reservations
router.get('/:id', getReservationById);     // Get reservation by ID
router.put('/:id', updateReservation);      // Update reservation by ID
router.delete('/:id', deleteReservation);   // Delete reservation by ID

module.exports = router;
