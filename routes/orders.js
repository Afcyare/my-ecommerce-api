const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/orders');
const { saveOrder, checkValidation } = require('../middleware/validate');

// Route definitions for Orders
router.get('/', ordersController.getAllOrders);
router.get('/:id', ordersController.getOrderById);
router.post('/', saveOrder, checkValidation, ordersController.createOrder);
router.put('/:id', saveOrder, checkValidation, ordersController.updateOrder);
router.delete('/:id', ordersController.deleteOrder);

module.exports = router;