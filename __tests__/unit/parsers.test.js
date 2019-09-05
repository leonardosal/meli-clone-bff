const { parseResultItemDetail, parseResultItems } = require('../../src/parsers.js');

describe('Parsers Test', () => {
  it('should be returns a correct parsed object', () => {
    const data = {
      id: "MLA812057433",
      site_id: "MLA",
      title: "Apple iPhone 7 32 Gb Oro",
      subtitle: null,
      seller_id: 86409296,
      category_id: "MLA1055",
      official_store_id: null,
      price: 31999,
      base_price: 31999,
      original_price: null,
      currency_id: "ARS",
      initial_quantity: 8,
      available_quantity: 1,
      sold_quantity: 5,
      condition: "new",
      pictures: [
        {
          id: "948813-MLA31003000773_062019",
          url: "http://mla-s2-p.mlstatic.com/948813-MLA31003000773_062019-O.jpg",
          secure_url: "https://mla-s2-p.mlstatic.com/948813-MLA31003000773_062019-O.jpg",
          size: "249x500",
          max_size: "536x1074",
          quality: ""
        }
      ],
      shipping: {
        local_pick_up: true,
        free_shipping: true,
        logistic_type: "drop_off",
        store_pick_up: false
      }
    };

    const description = {
      plain_text: "Lorem ipsu"
    };

    const expected = {
        author: {
          name: "Leonardo",
          lastname: "Almeida"
        },
        item: {
          id: "MLA812057433",
          title: "Apple iPhone 7 32 Gb Oro",
          price: {
            currency: "ARS",
            amount: 31999,
            decimals: 0
          },
          condition: "new",
          picture: "https://mla-s2-p.mlstatic.com/948813-MLA31003000773_062019-O.jpg",
          free_shipping: true,
          sold_quantity: 5,
          description: "Lorem ipsu"
        }
      };

    const result = parseResultItemDetail(data, description)

    expect(expected).toEqual(result)
  })
})