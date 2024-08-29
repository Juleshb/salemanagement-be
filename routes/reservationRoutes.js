// routes/reservationRoutes.js
const express = require('express');
const router = express.Router();
const { createReservation } = require('../controllers/reservationController');

router.post('/', createReservation);

module.exports = router;
