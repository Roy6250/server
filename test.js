const request = require('supertest');
const {app} = require('./index')
// import app from './index';

describe('GET /api/v1/customers', () => {
  it('should return a JSON response with customers data', async () => {
    const response = await request(app).get('/api/v1/customers');
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/application\/json/);
    expect(Array.isArray(response.body)).toBe(true); // Assuming customers is an array in the response
    // Add more specific expectations based on your expected response data
  });

  // Add more test cases to cover other scenarios (e.g., testing with specific request headers)
});