const express = require('express');
const cors = require('cors');
const app = express();

const { api, limit_of_records, port } = require('./config');
const { parseResultItemDetail, parseResultItems } = require('./parsers')

app.use(express.json())
app.use(cors())

app.get('/items', async (req, res) => {
  const url = `/sites/MLA/search?q=${req.query.q}&limit=${limit_of_records}`
  const response = await api.get(url);
  const result = parseResultItems(response.data);
  res.send(result);
});

app.get('/items/:id', async (req, res) => {
  const resProduct = await api.get(`/items/${req.params.id}`);
  const resDescription = await api.get(`/items/${req.params.id}/description`);
  const result = parseResultItemDetail(resProduct.data, resDescription.data);
  res.send(result);
});

app.get('/', (_, res) => {
  res.send('MELI API it\'s Works!');
});

app.listen(port, () => {
  console.log('app listening on port 3000!');
});

