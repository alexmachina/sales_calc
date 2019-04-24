import paymentModes from './constants/paymentModes'
import Credit from './services/calculate/credit'
import Debt from './services/calculate/debt'

const { debt, credit } = paymentModes

/* 
   TODO: Create math helpers with meaninful names
*/

const Payment = mode => payload => {
  switch (mode) {
    case debt:
      return Debt(payload)
    case credit:
      return Credit(payload)
    default:
      return {}
  }
}

export default Payment
