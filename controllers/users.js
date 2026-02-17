const User = require('../models/user');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createUser = async (req, res) => {
    /* #swagger.parameters['body'] = {
        in: 'body',
        schema: { $ref: '#/definitions/User' }
    } */
    try {
        const user = new User(req.body);
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Add getById, update, and delete similar to products...
module.exports = { getAllUsers, createUser };