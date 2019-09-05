const { parseResultItemDetail, parseResultItems } = require('../../src/parsers/parsers.js');
const ItemsResult = require('../resources/itemsResult.json')
const ItemDetailResult = require('../resources/itemDetailResult.json')
const ItemDescriptionResult = require('../resources/itemDescriptionResult.json')
const ItemsResultEmptyFilters = require('../resources/itemsResultEmptyFilters.json')

describe('Parsers Test', () => {
  it('should be returns a correct parsed result item detail object', () => {
    const expected = {
        author: {
          name: 'Leonardo',
          lastname: 'Almeida'
        },
        item: {
          id: 'MLA729695037',
          title: 'Computadora Macbook Air 13 - Usada Como Nueva - Core I7 256gb 8gb Mod 2014  Ifans',
          price: {
            currency: 'ARS',
            amount: 54999,
            decimals: 0.99
          },
          condition: 'new',
          picture: 'https://mla-s2-p.mlstatic.com/933268-MLA31593846925_072019-O.jpg',
          free_shipping: true,
          sold_quantity: 0,
          description: 'Lorem ipsu'
        }
      };

    const result = parseResultItemDetail({ ...ItemDetailResult, description: ItemDescriptionResult });

    expect(expected).toEqual(result);
  })

  it('should be returns a correct parsed result items object', () => {
    const expected = {
      author: {
        name: 'Leonardo',
        lastname: 'Almeida'
      },
      categories: [
        'Computación',
        'Apple',
        'Macbook'
      ],
      items: [
        {
          id: 'MLA729695037',
          title: 'Computadora Macbook Air 13 - Usada Como Nueva - Core I7 256gb 8gb Mod 2014  Ifans',
          price: {
            currency: 'ARS',
            amount: 54999,
            decimals: 0.99
          },
          condition: 'new',
          picture: 'http://mla-s2-p.mlstatic.com/933268-MLA31593846925_072019-I.jpg',
          free_shipping: true
        },
        {
          id: 'MLA694875976',
          title: 'Apple Macbook Air I5 8gb 128 Ssd 13.3 Hd Sellada Factura A B',
          price: {
            currency: 'ARS',
            amount: 87214,
            decimals: 0.64
          },
          condition: 'new',
          picture: 'http://mla-s1-p.mlstatic.com/946352-MLA31351830454_072019-I.jpg',
          free_shipping: true
        }
      ]
    };

    const result = parseResultItems(ItemsResult);
    expect(expected).toEqual(result);
  })

  it('should be returns a correct parsed result items object when without filters', () => {
    const expected = {
      author: {
        name: 'Leonardo',
        lastname: 'Almeida'
      },
      categories: [],
      items: [
        {
          id: 'MLA729695037',
          title: 'Computadora Macbook Air 13 - Usada Como Nueva - Core I7 256gb 8gb Mod 2014  Ifans',
          price: {
            currency: 'ARS',
            amount: 54999,
            decimals: 0.99
          },
          condition: 'new',
          picture: 'http://mla-s2-p.mlstatic.com/933268-MLA31593846925_072019-I.jpg',
          free_shipping: true
        },
        {
          id: 'MLA694875976',
          title: 'Apple Macbook Air I5 8gb 128 Ssd 13.3 Hd Sellada Factura A B',
          price: {
            currency: 'ARS',
            amount: 87214,
            decimals: 0.64
          },
          condition: 'new',
          picture: 'http://mla-s1-p.mlstatic.com/946352-MLA31351830454_072019-I.jpg',
          free_shipping: true
        }
      ]
    };

    const result = parseResultItems(ItemsResultEmptyFilters);
    expect(expected).toEqual(result);
  })
})