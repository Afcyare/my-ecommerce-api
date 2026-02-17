const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
const { isAuthenticated } = require('../middleware/authenticate');

router.get('/', usersController.getAllUsers);
router.post('/', isAuthenticated, usersController.createUser);

module.exports = router;