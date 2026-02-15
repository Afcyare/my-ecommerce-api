const request = require('supertest');
const app = require('../server');

describe('API GET Endpoints', () => {

  // --- PRODUCTS TESTS (4 tests) ---
  describe('Products Collection', () => {
    it('should return 200 on /products', async () => {
      const res = await request(app).get('/products');
      expect(res.statusCode).toBe(200);
    });

    it('should return JSON on /products', async () => {
      const res = await request(app).get('/products');
      expect(res.type).toBe('application/json');
    });

    it('should handle missing product ID with 404 or 500', async () => {
      const res = await request(app).get('/products/invalid_id');
      expect([404, 500]).toContain(res.statusCode);
    });

    it('should return JSON for single product request', async () => {
      const res = await request(app).get('/products/invalid_id');
      expect(res.type).toBe('application/json');
    });
  });


  // --- ORDERS TESTS (4 tests) ---
  describe('Orders Collection', () => {
    it('should return 200 on /orders', async () => {
      const res = await request(app).get('/orders');
      expect(res.statusCode).toBe(200);
    });

    it('should return JSON on /orders', async () => {
      const res = await request(app).get('/orders');
      expect(res.type).toBe('application/json');
    });

    it('should handle missing order ID with 404 or 500', async () => {
      const res = await request(app).get('/orders/invalid_id');
      expect([404, 500]).toContain(res.statusCode);
    });

    it('should return JSON for single order request', async () => {
      const res = await request(app).get('/orders/invalid_id');
      expect(res.type).toBe('application/json');
    });
  });


  // --- USERS TESTS (4 tests) ---
  describe('Users Collection', () => {
    it('should return 200 on /users', async () => {
      const res = await request(app).get('/users');
      expect(res.statusCode).toBe(200);
    });

    it('should return JSON on /users', async () => {
      const res = await request(app).get('/users');
      expect(res.type).toBe('application/json');
    });

    it('should handle missing user ID with 404 or 500', async () => {
      const res = await request(app).get('/users/invalid_id');
      expect([404, 500]).toContain(res.statusCode);
    });

    it('should return JSON for single user request', async () => {
      const res = await request(app).get('/users/invalid_id');
      expect(res.type).toBe('application/json');
    });
  });


  // --- REVIEWS TESTS (4 tests) ---
  describe('Reviews Collection', () => {
    it('should return 200 on /reviews', async () => {
      const res = await request(app).get('/reviews');
      expect(res.statusCode).toBe(200);
    });

    it('should return JSON on /reviews', async () => {
      const res = await request(app).get('/reviews');
      expect(res.type).toBe('application/json');
    });

    it('should handle missing review ID with 404 or 500', async () => {
      const res = await request(app).get('/reviews/invalid_id');
      expect([404, 500]).toContain(res.statusCode);
    });

    it('should return JSON for single review request', async () => {
      const res = await request(app).get('/reviews/invalid_id');
      expect(res.type).toBe('application/json');
    });
  });

});
