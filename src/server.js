const express = require('express');
const cors = require('cors');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const { PORT } = require('./config');
const { 
  findItemById, 
  findItems 
} = require('./controller')

app.use(express.json())
app.use(cors())

app.get('/items', findItems);

app.get('/items/:id', findItemById);

app.use('/', swaggerUi.serve);

app.get('/', swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log('app listening on port 3000!');
});

