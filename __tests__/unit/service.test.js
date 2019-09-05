const axios = require('axios');
const ItemsResult = require('../resources/itemsResult.json')
const ItemDetailResult = require('../resources/itemDetailResult.json')
const ItemDescriptionResult = require('../resources/itemDescriptionResult.json')
const { find, findById } = require('../../src/services/service');

jest.mock('axios');

describe('Services Test', () => {
  it('should be returns a correct items object', async () => {

    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: ItemsResult
      })
    );

    const query = "macbook"

    const expected = Object.assign({}, ItemsResult)

    const result = await find(query);

    expect(expected).toEqual(result);
  })

  it('should be returns a correct item detail object', async () => {
    const id = "MLA729695037"

    axios.get
      .mockImplementationOnce(() =>
        Promise.resolve({
          data: ItemDetailResult
        })
      )
      .mockImplementationOnce(() =>
        Promise.resolve({
          data: ItemDescriptionResult
        })
      );

    const expected = {
      ...ItemDetailResult,
      description: {
        ...ItemDescriptionResult
      }
    };

    const result = await findById(id);

    expect(expected).toEqual(result);
  })
})