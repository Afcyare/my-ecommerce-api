const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: "E-Commerce API",
    description: "API documentation for Products, Orders, Users, and Reviews collections. Includes OAuth protection for sensitive routes.",
  },
  
  host: "my-ecommerce-api-k4mc.onrender.com",
  schemes: ["https"],
  definitions: {
    Product: {
      name: "Gaming Keyboard",
      price: 49.99,
      description: "Mechanical RGB keyboard",
      category: "Electronics",
      stock: 50
    },
    Order: {
      customerName: "Jane Doe",
      totalAmount: 150.00,
      items: ["640f12345678901234567890"],
      status: "Shipped"
    },
    // NEW: User Definition
    User: {
      username: "johndoe123",
      email: "john@example.com",
      displayName: "John Doe",
      role: "Customer"
    },
    // NEW: Review Definition
    Review: {
      productId: "640f12345678901234567890",
      rating: 5,
      comment: "Excellent build quality and fast shipping!",
      date: "2026-02-15"
    }
  }
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);