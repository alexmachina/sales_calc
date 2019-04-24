export const Mdr = parcels =>
    parcels === 2 ? 0.0489 : 0.0309

export const Net = (gross, mdr) =>
  gross - (gross * mdr)

