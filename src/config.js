
const axios = require('axios');

const api = axios.create({
  baseURL: 'https://api.mercadolibre.com'
})

module.exports = {
  limit_of_records: 4,
  api,
  port: process.env.PORT || 3000
}