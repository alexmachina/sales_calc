import { Mdr, Net } from './functions'

const Credit = ({ gross, parcels }) => {
  const mdr = Mdr(parcels)

  return {
    gross,
    net: Net(gross, mdr),
    parcels,
    mdr,
    totalTax: mdr
  }
}

export default Credit
