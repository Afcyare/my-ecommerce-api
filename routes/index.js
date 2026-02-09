const router = require('express').Router();

router.get('/', (req, res) => {
  // Provides a professional landing message
  res.send('Welcome to the E-Commerce API. Please visit /api-docs for documentation.');
});

// Route for Swagger documentation
router.use('/api-docs', require('./swagger'));

// Main collection routes
router.use('/products', require('./products'));
router.use('/orders', require('./orders'));

module.exports = router;