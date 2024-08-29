// routes/roomRoutes.js
const express = require('express');
const router = express.Router();
const { createRoom } = require('../controllers/roomController');

router.post('/', createRoom);

module.exports = router;
