import { removeNonNumbers } from './remove-non-numbers'

export const cardNumberMask = (cardNumber, previousCardNumber) => {
  if (cardNumber.length > 18) {
    return previousCardNumber
  }
  if (!(/^(\d{4}) (\d{4}) (\d{4}) (\d{4})$/).test(cardNumber)) {
    const cleancardNumber = removeNonNumbers(cardNumber.toString())
    return cleancardNumber
      .replace(/(\d{4})(\d)/, '$1 $2')
      .replace(/(\d{4})(\d)/, '$1 $2')
      .replace(/(\d{4})(\d{4})$/, '$1 $2')
  }
  return cardNumberMask
}
