const request = require('supertest');

const app = require('../../src/server');

describe('Get item details test', () => {
  it('should be returns items object when passed any string on query parameter', async () => {
    const id =  'MLA729695037'

    const response = await request(app)
      .get(`/items/${id}`)
      
    expect(response.status).toBe(200);
  })

  it('should be returns 404 on not found item', async () => {
    const id =  'MLA725037'

    const response = await request(app)
      .get(`/items/${id}`)
      
    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Item não encontrado.');
  })
})