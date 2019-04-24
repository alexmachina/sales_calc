import paymentModes from '../'
import { assert } from 'chai'

describe('Superget Calc', () => {
  describe('Business Logic', () => {
    test('Has expected payment modes', () => {
      const expected = {
        debt: 'DEBT',
        credit: 'CREDIT',
        installments: 'INSTALLMENTS'
      }

      assert.deepEqual(paymentModes, expected)
    })
  })
})
