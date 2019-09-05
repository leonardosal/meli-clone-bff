
const { parseResultItemDetail, parseResultItems } = require('../parsers/parsers')
const { find, findById } = require('../services/service')

async function findItems (req, res) {
  try {
    const data = await find(req.query.q)
    const result = parseResultItems(data);
    res.send(result);
  } catch (err) {
    res.status(500).send({ 
      message: 'Erro ao executar a operação.' 
    })
  }
}

async function findItemById (req, res) {
  try {
    const data = await findById(req.params.id)
    const result = parseResultItemDetail(data);
    res.send(result);
  } catch (err) {
    console.log(err.message)
    res.status(500).send({ 
      message: 'Erro ao executar a operação.' 
    })
  }
}

module.exports = {
  findItems,
  findItemById
}