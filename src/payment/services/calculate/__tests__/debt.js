import { assert } from 'chai'
import paymentModes from '../../../constants/paymentModes'
import Payment from '../../..'

/* TODO: test to throw for invalid inputs */

describe('When payment mode is DEBT', () => {
  const debtMode = paymentModes.debt
  const DebtPayment = Payment(debtMode)
  const gross = 100
  const payment = DebtPayment({ gross })
  const expectedNet = 98.05

  describe('After calculation', () => {
    it('Applies a total tax of 1.95% to gross value', () => {
      assert.deepEqual(payment.net, expectedNet)
    })

    it('Contains gross, MDR, net and total tax properties', () => {
      const expectedPayment = {
        gross,
        net: expectedNet,
        totalTax: 0.0195,
        mdr: 0.0195
      }

      assert.deepEqual(payment, expectedPayment)
    })
  })
})
