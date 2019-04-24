import { Mdr, Net } from './functions'

const Debt = ({ gross }) => ({
  gross,
  net: Net(gross, Mdr()),
  mdr: Mdr(),
  totalTax: Mdr()
})

export default Debt
