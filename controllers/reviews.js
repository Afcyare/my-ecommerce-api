const Review = require('../models/review');

const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find();
        res.status(200).json(reviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createReview = async (req, res) => {
    /* #swagger.parameters['body'] = {
        in: 'body',
        schema: { $ref: '#/definitions/Review' }
    } */
    try {
        const review = new Review(req.body);
        const savedReview = await review.save();
        res.status(201).json(savedReview);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}; 

module.exports = { getAllReviews, createReview };