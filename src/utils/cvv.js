import { removeNonNumbers } from './remove-non-numbers'

export const cvvMask = (cvv, previousCvv) => {
  if (cvv.length > 4) {
    return previousCvv
  }
  if (!(/^(\d{4})$/).test(cvv)) {
    const cleanCvv = removeNonNumbers(cvv.toString())
    return cleanCvv
      .replace(/(\d{4})(\d)/, '$1')
  }
  return cvvMask
}
