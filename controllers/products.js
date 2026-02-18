const Product = require('../models/product');

// Get all products from database
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get single product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add new product to database
const createProduct = async (req, res) => {
  // #swagger.security = [{ "github_auth": [] }]
    /* #swagger.parameters['body'] = {
            in: 'body',
            description: 'Add new product',
            schema: { $ref: '#/definitions/Product' }
    } */
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update product by ID
const updateProduct = async (req, res) => {
  // #swagger.security = [{ "github_auth": [] }]
    /* #swagger.parameters['body'] = {
            in: 'body',
            description: 'Update product information',
            schema: { $ref: '#/definitions/Product' }
    } */
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete product by ID
const deleteProduct = async (req, res) => {
  // #swagger.security = [{ "github_auth": [] }]
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };