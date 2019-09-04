
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000

const LIMIT_OF_RECORDS = 4;

app.use(express.json())
app.use(cors())

app.get('/', function (req, res) {
  res.send('API Works!');
});

app.get('/items', async (req, res) => {

  const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}&limit=${LIMIT_OF_RECORDS}`);

  res.send(parseResult(response.data));
});

app.get('/items/:id', async function (req, res) {
  const resProduct = await axios.get(`https://api.mercadolibre.com/items/${req.params.id}`);
  const resDescription = await axios.get(`https://api.mercadolibre.com/items/${req.params.id}/description`);

  const result = {
    author: {
      name: 'Leonardo',
      lastname: 'Almeida'
    },
    item: {
      id: resProduct.data.id, 
      title: resProduct.data.title, 
      price: {
        currency: resProduct.data.currency_id, 
        amount: Math.floor(resProduct.data.price),
        decimals: parseFloat((resProduct.data.price % 1).toFixed(2))
      },
      picture: resProduct.data.pictures[0].secure_url,
      condition: resProduct.data.condition,
      free_shipping: resProduct.data.shipping.free_shipping,
      sold_quantity: resProduct.data.sold_quantity,
      description: resDescription.data.plain_text
    }
  }
  
  res.send(result);
});

app.listen(PORT, function () {
  console.log('Example app listening on port 3000!');
});

function parseResult(data) {
  return {
    author: {
      name: 'Leonardo',
      lastname: 'Almeida'
    },
    categories: parseCategories(data.filters),
    items: parseItems(data.results)
  }

  function parseItems(data) {
    return data.map((item) => (
      {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: Math.floor(item.price),
          decimals: parseFloat((item.price % 1).toFixed(2))
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping
      }
    ))
  }
}

function parseCategories(data) {
  return data
    .find((item) => item.id === 'category')
    .values[0]
    .path_from_root
    .map((item) => item.name)
}