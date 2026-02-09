const router = require('express').Router();

// Route for Swagger documentation
router.use('/api-docs', require('./swagger'));

// Main collection routes
router.use('/products', require('./products'));
router.use('/orders', require('./orders'));

module.exports = router;