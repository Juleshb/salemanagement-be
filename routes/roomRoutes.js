// routes/roomRoutes.js
const express = require('express');
const router = express.Router();
const {
  createRoom,
  getAllRooms,
  getRoomById,
  updateRoom,
  deleteRoom
} = require('../controllers/roomController');

// Create a new room
router.post('/', createRoom);

// Get all rooms
router.get('/', getAllRooms);

// Get a single room by ID
router.get('/:id', getRoomById);

// Update a room by ID
router.put('/:id', updateRoom);

// Delete a room by ID
router.delete('/:id', deleteRoom);

module.exports = router;
