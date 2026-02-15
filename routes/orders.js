const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/orders");
const { saveOrder, checkValidation } = require("../middleware/validate");
const { isAuthenticated } = require("../middleware/authenticate");

// Route definitions for Orders
router.get("/", ordersController.getAllOrders);
router.get("/:id", ordersController.getOrderById);

// Protected routes
router.post(
  "/",
  isAuthenticated,
  saveOrder,
  checkValidation,
  ordersController.createOrder,
);
router.put(
  "/:id",
  isAuthenticated,
  saveOrder,
  checkValidation,
  ordersController.updateOrder,
);
router.delete("/:id", isAuthenticated, ordersController.deleteOrder);

module.exports = router;
