import { removeNonNumbers } from './remove-non-numbers'

export const validatesMask = (validate, previousValidate) => {
  if (validate.length > 5) {
    return previousValidate
  }
  if (!(/^(\d{2}).(\d{2})$/).test(validate)) {
    const cleanValidate = removeNonNumbers(validate.toString())
    return cleanValidate
      .replace(/(\d{2})(\d{2})$/, '$1/$2')
  }
  return validatesMask
}
