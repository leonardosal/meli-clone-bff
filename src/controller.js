const { API, LIMIT_OF_RECORDS } = require('./config');
const { parseResultItemDetail, parseResultItems } = require('./parsers')

async function findItems (req, res) {
  try {
    const url = `/sites/MLA/search?q=${req.query.q}&limit=${LIMIT_OF_RECORDS}`
    const response = await API.get(url);
    const result = parseResultItems(response.data);
    res.send(result);
  } catch (err) {
    res.status(500).send({ 
      message: 'Erro ao executar a operação.' 
    })
  }
}

async function findItemById (req, res) {
  try {
    const resProduct = await API.get(`/items/${req.params.id}`);
    const resDescription = await API.get(`/items/${req.params.id}/description`);
    const result = parseResultItemDetail(resProduct.data, resDescription.data);
    res.send(result);
  } catch (err) {
    res.status(500).send({ 
      message: 'Erro ao executar a operação.' 
    })
  }
}

module.exports = {
  findItems,
  findItemById
}