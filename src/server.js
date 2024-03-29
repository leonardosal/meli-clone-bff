const express = require('express');
const cors = require('cors');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const { PORT } = require('./config/config');
const { 
  findItemById, 
  findItems 
} = require('./controllers/controller')

app.use(express.json())
app.use(cors())

app.get('/items', findItems);

app.get('/items/:id', findItemById);

app.use('/', swaggerUi.serve);

app.get('/', swaggerUi.setup(swaggerDocument));

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT);
}

module.exports = app

