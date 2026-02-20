const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
const { isAuthenticated } = require('../middleware/authenticate');
const { saveUser, checkValidation } = require('../middleware/validate'); // <-- Imported here

router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getUserById);

// Protected and Validated routes
router.post('/', isAuthenticated, saveUser, checkValidation, usersController.createUser);
router.put('/:id', isAuthenticated, saveUser, checkValidation, usersController.updateUser);

router.delete('/:id', isAuthenticated, usersController.deleteUser);

module.exports = router;