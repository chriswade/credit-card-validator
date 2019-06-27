export const cardType = (cardNumber: string) => {
  const amex = cardNumber.startsWith('37') || cardNumber.startsWith('34') && cardNumber.length === 15
  const discover = cardNumber.startsWith('6011') && cardNumber.length === 16 
  const mastercard = cardNumber.startsWith('51') || cardNumber.startsWith('52') || cardNumber.startsWith('53') || cardNumber.startsWith('54') || cardNumber.startsWith('55') && cardNumber.length === 16
  const visa = cardNumber.startsWith('4') && cardNumber.length === 13 || cardNumber.length === 16

  if(!checkCardValidator(cardNumber)) {
    return 'Invalid card'
  } else if(amex) {
    return 'AMEX'
  } else if(discover) {
    return 'Discover'
  } else if(mastercard) {
    return 'Mastercard'
  } else if(visa) {
    return 'Visa'
  } else {
    return 'invalid card'
  }
}


export const checkCardValidator = (cardNumber: string) => {
  const cardArray = cardNumber
  .split('')
  .reverse()
  .map((x: string) => Number(x))
  const lastDigit = cardArray.splice(0, 1)[0]
  const sum = cardArray.reduce((accumulator: number, value: number, index: number) =>
    (index % 2 !== 0 ? accumulator + value : accumulator + ((value * 2) % 9) || 9), 0)
  const total = sum + lastDigit;

  return total % 10 === 0;
}


