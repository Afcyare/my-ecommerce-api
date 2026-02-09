const mongoose = require('mongoose');

// Define the schema for the Order collection
const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  totalAmount: { type: Number, required: true },
  status: { type: String, default: 'Pending' },
  items: [{ type: String }] 
});

// Export the model for use in controllers
module.exports = mongoose.model('Order', orderSchema);