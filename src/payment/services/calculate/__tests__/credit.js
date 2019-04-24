import { assert } from 'chai'
import paymentModes from '../../../constants/paymentModes'
import Payment from '../../..'

describe('When payment mode is CREDIT', () => {
  const creditMode = paymentModes.credit
  const CreditPayment = Payment(creditMode)
  const gross = 100

  it('Applies a total tax of 4.89% if parcels sum are less than 12', () => {
    const parcels = 2

    const payload = { gross, parcels }
    const expectedPayment = {
      gross,
      net: 95.11,
      parcels,
      mdr: 0.0489,
      totalTax: 0.0489
    }

    const testPayment = CreditPayment(payload)
    assert.equal(testPayment.net, expectedPayment.net)
  })

  it('Applies a total tax of 3.09% if parcels sum are 12 or more', () => {
    const parcels = 12
    const payload = { gross, parcels }

    const expectedPayment = {
      gross,
      net: 96.91,
      parcels,
      mdr: 0.0309,
      totalTax: 0.0309
    }

    const testPayment = CreditPayment(payload)
    assert.equal(testPayment.net, expectedPayment.net)
  })
})
