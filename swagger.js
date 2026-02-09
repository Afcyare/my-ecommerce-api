const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "E-Commerce API",
    description: "API documentation for Products and Orders collections",
  },
  // When you deploy to Render, change this to your Render URL
  host: "my-ecommerce-api-k4mc.onrender.com",
  schemes: ["https"],
  definitions: {
    Product: {
      name: "Gaming Keyboard",
      price: 49.99,
      description: "Mechanical RGB keyboard",
      category: "Electronics",
      stock: 50,
    },
    Order: {
      customerName: "Jane Doe",
      totalAmount: 150.0,
      items: ["Product ID 1", "Product ID 2"],
    },
  },
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./routes/index.js"]; // This points to your main route file

/* NOTE: If you are using express Router, pass only the root file where the route starts. */

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  console.log("Swagger JSON has been generated successfully.");
});
