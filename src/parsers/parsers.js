function getAuthor() {
  return {
    name: 'Leonardo',
    lastname: 'Almeida'
  }
}

function parsePrice(product) {
  return {
    currency: product.currency_id,
    amount: Math.floor(product.price),
    decimals: parseFloat((product.price % 1).toFixed(2))
  }
}

function parseCategories(data) {
  const filter = data.find((item) => item.id === 'category')

  if (filter) {
    return filter
      .values[0]
      .path_from_root
      .map((item) => item.name)
  }

  return []
}

function parseItem(item) {
  return {
    id: item.id,
    title: item.title,
    price: parsePrice(item),
    condition: item.condition,
    picture: item.thumbnail,
    free_shipping: item.shipping.free_shipping
  }
}

function parseItems(data) {
  return data.map((item) => parseItem(item))
}

function parseResultItems(data) {
  return {
    author: getAuthor(),
    categories: parseCategories(data.filters),
    items: parseItems(data.results)
  }
}

function parseResultItemDetail(item) {
  return {
    author: getAuthor(),
    item: {
      ...parseItem(item),
      picture: item.pictures[0].secure_url,
      sold_quantity: item.sold_quantity,
      description: item.description.plain_text
    }
  }
}

module.exports = {
  parseResultItemDetail,
  parseResultItems
}