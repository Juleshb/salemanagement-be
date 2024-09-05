const express = require('express');
const router = express.Router();
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  loginUser
} = require('../controllers/userController');
const authenticateToken = require('../middlewares/authMiddleware');

// Public routes
router.post('/signup', createUser);
router.post('/login', loginUser);

// Protected routes (require JWT authentication)
router.get('/', authenticateToken, getAllUsers);
router.get('/:id', authenticateToken, getUserById);
router.put('/:id', authenticateToken, updateUser);
router.delete('/:id', authenticateToken, deleteUser);

module.exports = router;
