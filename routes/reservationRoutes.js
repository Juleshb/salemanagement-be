// routes/reservationRoutes.js
const express = require('express');
const router = express.Router();
const {
  createReservation,
  getAllReservations,
  getReservationById,
  updateReservation,
  deleteReservation,
  getReservationsByUser
} = require('../controllers/reservationController');

const authenticateToken = require('../middlewares/authMiddleware');

// CRUD routes
router.post('/', createReservation);        // Create a new reservation
router.get('/', getAllReservations);        // Get all reservations
router.get('/oneby/:id', getReservationById);     // Get reservation by ID
router.put('/:id', authenticateToken, updateReservation);      // Update reservation by ID
router.delete('/:id', authenticateToken, deleteReservation);   // Delete reservation by ID
router.get('/user', authenticateToken, getReservationsByUser);

module.exports = router;
