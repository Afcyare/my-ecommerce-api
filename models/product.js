const mongoose = require('mongoose');

// Define the schema for the Product collection
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  category: { type: String, required: true },
  stock: { type: Number, required: true }
});

// Export the model for use in controllers
module.exports = mongoose.model('Product', productSchema);