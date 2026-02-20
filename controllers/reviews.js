const Review = require('../models/review');

const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find();
        res.status(200).json(reviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getReviewById = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        if (!review) return res.status(404).json({ message: 'Review not found' });
        res.status(200).json(review);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createReview = async (req, res) => {
    // #swagger.security = [{ "github_auth": [] }]
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

const updateReview = async (req, res) => {
    // #swagger.security = [{ "github_auth": [] }]
    /* #swagger.parameters['body'] = {
        in: 'body',
        schema: { $ref: '#/definitions/Review' }
    } */
    try {
        const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedReview) return res.status(404).json({ message: 'Review not found' });
        res.status(204).send();
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteReview = async (req, res) => {
    // #swagger.security = [{ "github_auth": [] }]
    try {
        const deletedReview = await Review.findByIdAndDelete(req.params.id);
        if (!deletedReview) return res.status(404).json({ message: 'Review not found' });
        res.status(200).send({ message: 'Review deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getAllReviews, getReviewById, createReview, updateReview, deleteReview };