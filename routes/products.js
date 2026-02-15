const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');
const { saveProduct, checkValidation } = require('../middleware/validate');
const { isAuthenticated } = require('../middleware/authenticate'); // Import auth

router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProductById);

// Protected routes
router.post('/', isAuthenticated, saveProduct, checkValidation, productsController.createProduct);
router.put('/:id', isAuthenticated, saveProduct, checkValidation, productsController.updateProduct);
router.delete('/:id', isAuthenticated, productsController.deleteProduct);

module.exports = router;