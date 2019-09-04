const express = require('express');
const cors = require('cors');
const app = express();

const { PORT } = require('./config');
const { findItemById, findItems } = require('./controller')

app.use(express.json())
app.use(cors())

app.get('/items', findItems);

app.get('/items/:id', findItemById);

app.get('/', (_, res) => {
  res.send('MELI API it\'s Works!');
});

app.listen(PORT, () => {
  console.log('app listening on port 3000!');
});

