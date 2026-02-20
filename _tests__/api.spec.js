const request = require("supertest");
const app = require("../server");
const mongoose = require("mongoose");

// Increase the global timeout for this entire test file to 30 seconds
jest.setTimeout(60000);

describe("API GET Endpoints", () => {
  // Ensures the database is connected before any tests run
  beforeAll(async () => {
    // If the connection isn't ready, this waits for it
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(process.env.MONGODB_URI);
    }
  });

  // Closes the database connection after all tests finish to prevent Jest hanging
  afterAll(async () => {
    await mongoose.connection.close();
  });

  // --- PRODUCTS TESTS ---
  describe("Products Collection", () => {
    // Tests if the main products route returns a success status
    it("should return 200 on /products", async () => {
      const res = await request(app).get("/products");
      expect(res.statusCode).toBe(200);
    });

    // Verifies that the response format is JSON
    it("should return JSON on /products", async () => {
      const res = await request(app).get("/products");
      expect(res.type).toBe("application/json");
    });

    // Checks for proper error status codes when an invalid ID is provided
    it("should handle missing product ID with 404 or 500", async () => {
      const res = await request(app).get("/products/invalid_id");
      expect([404, 500]).toContain(res.statusCode);
    });

    // Ensures the error response is still in JSON format
    it("should return JSON for single product request", async () => {
      const res = await request(app).get("/products/invalid_id");
      expect(res.type).toBe("application/json");
    });
  });

  // --- ORDERS TESTS ---
  describe("Orders Collection", () => {
    it("should return 200 on /orders", async () => {
      const res = await request(app).get("/orders");
      expect(res.statusCode).toBe(200);
    });

    it("should return JSON on /orders", async () => {
      const res = await request(app).get("/orders");
      expect(res.type).toBe("application/json");
    });

    it("should handle missing order ID with 404 or 500", async () => {
      const res = await request(app).get("/orders/invalid_id");
      expect([404, 500]).toContain(res.statusCode);
    });

    it("should return JSON for single order request", async () => {
      const res = await request(app).get("/orders/invalid_id");
      expect(res.type).toBe("application/json");
    });
  });

  // --- USERS TESTS ---
  describe("Users Collection", () => {
    it("should return 200 on /users", async () => {
      const res = await request(app).get("/users");
      expect(res.statusCode).toBe(200);
    });

    it("should return JSON on /users", async () => {
      const res = await request(app).get("/users");
      expect(res.type).toBe("application/json");
    });

    it("should handle missing user ID with 404 or 500", async () => {
      const res = await request(app).get("/users/invalid_id");
      expect([404, 500]).toContain(res.statusCode);
    });

    it("should return JSON for single user request", async () => {
      const res = await request(app).get("/users/invalid_id");
      expect(res.type).toBe("application/json");
    });
  });

  // --- REVIEWS TESTS ---
  describe("Reviews Collection", () => {
    it("should return 200 on /reviews", async () => {
      const res = await request(app).get("/reviews");
      expect(res.statusCode).toBe(200);
    });

    it("should return JSON on /reviews", async () => {
      const res = await request(app).get("/reviews");
      expect(res.type).toBe("application/json");
    });

    it("should handle missing review ID with 404 or 500", async () => {
      const res = await request(app).get("/reviews/invalid_id");
      expect([404, 500]).toContain(res.statusCode);
    });

    it("should return JSON for single review request", async () => {
      const res = await request(app).get("/reviews/invalid_id");
      expect(res.type).toBe("application/json");
    });
  });
});
