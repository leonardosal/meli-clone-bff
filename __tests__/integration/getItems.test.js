const request = require('supertest');

const app = require('../../src/server');

describe('Get items test', () => {
  it('should be returns items object when passed any string on query parameter', async () => {
    const response = await request(app)
      .get('/items')
      .query({ q: 'macbook' })

    expect(response.status).toBe(200);
  })
})