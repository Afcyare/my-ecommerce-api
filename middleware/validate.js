const { body, validationResult } = require("express-validator");

// Validation rules for adding/updating products
const saveProduct = [
  body("name").notEmpty().withMessage("Name is required"),
  body("price").isNumeric().withMessage("Price must be a number"),
  body("stock").isInt().withMessage("Stock must be an integer"),
  body("category").notEmpty().withMessage("Category is required"),
];

// Validation rules for adding/updating orders
const saveOrder = [
  body("customerName").notEmpty().withMessage("Customer name is required"),
  body("totalAmount").isNumeric().withMessage("Total amount must be a number"),
  body("items").isArray().withMessage("Items must be an array"),
];

// Middleware function to check for validation errors
// NEW: Validation for Users
const saveUser = [
  body("username").notEmpty().withMessage("Username is required"),
  body("email").isEmail().withMessage("Valid email is required"),
];

// NEW: Validation for Reviews
const saveReview = [
  body("productId").notEmpty().withMessage("Product ID is required"),
  body("rating")
    .isInt({ min: 1, max: 5 })
    .withMessage("Rating must be between 1 and 5"),
];

const checkValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  saveProduct,
  saveOrder,
  saveUser,
  saveReview,
  checkValidation,
};
