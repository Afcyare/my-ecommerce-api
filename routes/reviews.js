const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/reviews');
const { isAuthenticated } = require('../middleware/authenticate');

router.get('/', reviewsController.getAllReviews);
router.post('/', isAuthenticated, reviewsController.createReview);

module.exports = router;