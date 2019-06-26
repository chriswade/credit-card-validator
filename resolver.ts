

export const isValid = (card: string) => {
  const cardSplit = card.split('', card.length -1)
  const lastDigit = Number(card.slice(-1))
  const doubleEachNumber = cardSplit.map((x:any) => x * 2)
  const last = doubleEachNumber.concat(lastDigit)
  const sumOfAllNumber = doubleEachNumber.reduce((a, b) => a + b, 0) % 10

   if (sumOfAllNumber === 0) {
     return true
   } else {
     return false
   }

  // const c = num.split('').map(x => Number(x))
  // const t = c.reduce((a: any, b:any) => a+b, 0) % 10
  // return num
} 