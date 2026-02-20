const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/reviews');
const { isAuthenticated } = require('../middleware/authenticate');
const { saveReview, checkValidation } = require('../middleware/validate'); // <-- Imported here

router.get('/', reviewsController.getAllReviews);
router.get('/:id', reviewsController.getReviewById);

// Protected and Validated routes
router.post('/', isAuthenticated, saveReview, checkValidation, reviewsController.createReview);
router.put('/:id', isAuthenticated, saveReview, checkValidation, reviewsController.updateReview);

router.delete('/:id', isAuthenticated, reviewsController.deleteReview);

module.exports = router;