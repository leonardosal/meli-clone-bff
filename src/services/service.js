const axios = require('axios');

const { LIMIT_OF_RECORDS } = require('../config/config');

const baseURL = 'https://api.mercadolibre.com';

async function find (query) {
  const url = `${baseURL}/sites/MLA/search?q=${query}&limit=${LIMIT_OF_RECORDS}`
  const response = await axios.get(url);

  return response.data
}

async function findById (id) {
  const resProduct = await axios.get(`${baseURL}/items/${id}`);
  const resDescription = await axios.get(`${baseURL}/items/${id}/description`);

  return {
    ...resProduct.data, 
    description: {
      ...resDescription.data
    }
  }
}

module.exports = {
  find,
  findById
}