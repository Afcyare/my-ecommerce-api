const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');
const { saveProduct, checkValidation } = require('../middleware/validate');

// Route definitions for Products
router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProductById);
router.post('/', saveProduct, checkValidation, productsController.createProduct);
router.put('/:id', saveProduct, checkValidation, productsController.updateProduct);
router.delete('/:id', productsController.deleteProduct);

module.exports = router;