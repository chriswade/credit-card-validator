import { __InputValue } from "graphql";

export const cardType = (cardNumber: string) => {
   if(cardNumber.startsWith('37') || cardNumber.startsWith('34') && cardNumber.length === 15) {
    return 'AMEX'
  } else if(cardNumber.startsWith('6011') && cardNumber.length === 16 ) {
    return 'Discover'
  } else if(cardNumber.startsWith('51') || cardNumber.startsWith('55') && cardNumber.length === 16) {
    return 'Mastercard'
  } else if(cardNumber.startsWith('4') && cardNumber.length === 13 || cardNumber.length === 16) {
    return 'Visa'
  }
}


export const lluhnCheck = (cardNumber: any) => {
  const cardArray = cardNumber
  .split('')
  .reverse()
  .map((x: any) => Number(x))
  const lastDigit = cardArray.splice(0, 1)[0]
  console.log(cardArray)
  let sum = cardArray.reduce((accumulator: number, value: number, index: number) => (index % 2 !== 0 ? accumulator + value : accumulator + ((value * 2) % 9) || 9), 0)
  sum += lastDigit;

  console.log(sum)
  return sum % 10 === 0;
}


