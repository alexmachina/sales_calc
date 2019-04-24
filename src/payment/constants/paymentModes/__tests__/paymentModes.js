import paymentModes from '../'
import { assert } from 'chai'

describe('Superget Calc', () => {
  describe('Business Logic', () => {
    test('Has expected payment modes', () => {
      const expected = {
        debt: 'debt',
        credit: 'credit',
        parcels: 'parcelS'
      }

      assert.deepEqual(paymentModes, expected)
    })
  })
})
