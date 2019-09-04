
const axios = require('axios');

const API = axios.create({
  baseURL: 'https://api.mercadolibre.com',
  timeout: 5000
})

module.exports = {
  LIMIT_OF_RECORDS: 4,
  PORT: process.env.PORT || 3000,
  API
}