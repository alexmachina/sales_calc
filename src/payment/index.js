import paymentModes from './constants/paymentModes'
const { debt, credit } = paymentModes

/* TODO: Create constants for taxes
   TODO: Split each mode's logic into it's own modules
   TODO: Create math helpers with meaninful names
*/

const DebtPayment = ({ gross }) => {
  const mdr = 0.0195
  const net = gross => gross - (gross * mdr)

  return {
    gross,
    net: net(gross),
    mdr,
    totalTax: mdr
  }
}

const CreditPayment = ({ gross, parcels }) => {
  const Mdr = parcels =>
    parcels === 2 ? 0.0489 : 0.0309

  const mdr = Mdr(parcels)
  const Net = gross => gross - (gross * mdr)

  const net = Net(gross)
  const totalTax = mdr

  return {
    gross,
    net,
    parcels,
    mdr,
    totalTax
  }
}

const Payment = mode => payload => {
  switch (mode) {
    case debt:
      return DebtPayment(payload)
    case credit:
      return CreditPayment(payload)
    default:
      return {}
  }
}

export default Payment
