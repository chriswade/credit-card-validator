import { cardType, checkCardValidator } from "./index";

describe('it should check card types 😎  💳', () => {
  test('it should be a of type visa', () => {
    expect(cardType('4012000033330026')).toBe('Visa')
  })
  test('it should be a of type mastercard', () => {
    expect(cardType('5555555555554444')).toBe('Mastercard')
  })
  test('it should be a of type american express', () => {
    expect(cardType('374215731451037')).toBe('AMEX')
  })
  test('it should be a of type discover', () => {
    expect(cardType('6011111111111117')).toBe('Discover')
  }) 
})

describe('it should check if the card is valid', () => {
 const testArray = [
  '374215731451037',
  '373509573765533',
  '343520267590035',
  '374363662829480',
  '5249423935237069',
  '5143894570255730',
  '5550261056429443',
  '5251394331316291',
  '6011967043620636',
  '6011577450244992',
  '6011093797661153',
  '4876703715170124',
  '4143227275505450',
  '4279461437225881',
  '4026247034243351'
  ]
  test('it should test all cards in the array', () => {
    expect(testArray.map(cardNumber => checkCardValidator(cardNumber)))
  })

})

