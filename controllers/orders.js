const Order = require("../models/order");

// Get all orders from database
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Find a specific order by its unique ID
const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (err) {
    // Return 500 for server errors or invalid ID formats
    res.status(500).json({ message: err.message });
  }
};

// Create a new order
const createOrder = async (req, res) => {
  // #swagger.security = [{ "github_auth": [] }]
  /* #swagger.parameters['body'] = {
            in: 'body',
            description: 'Add new order',
            schema: { $ref: '#/definitions/Order' }
    } */
  try {
    const order = new Order(req.body);
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update order status or items
const updateOrder = async (req, res) => {
  // #swagger.security = [{ "github_auth": [] }]
  /* #swagger.parameters['body'] = {
            in: 'body',
            description: 'Update order information',
            schema: { $ref: '#/definitions/Order' }
    } */
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.status(200).json(order);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete order from database
const deleteOrder = async (req, res) => {
  // #swagger.security = [{ "github_auth": [] }]
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};
