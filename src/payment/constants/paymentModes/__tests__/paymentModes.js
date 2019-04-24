import assert from 'lib/tests/assert'
import paymentModes from '../'
import { Map } from 'immutable'

describe('Superget Calc', () => {
  describe('Business Logic', () => {
    test('Has expected payment modes', () => {
      const expected = Map({
        debt: 'DEBT',
        credit: 'CREDIT',
        installments: 'INSTALLMENTS'
      })
      assert.equal(paymentModes, expected)
    })
  })
})
