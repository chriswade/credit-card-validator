import { cardType, checkCardValidator } from "./index";

describe('it should check cardType 😎  💳', () => {
  test('it should be a of type Visa', () => {
    expect(cardType('4012000033330026')).toBe('Visa')
  })
  test('it should be a of type Mastercard', () => {
    expect(cardType('5555555555554444')).toBe('Mastercard')
  })
  test('it should be a of type American Express', () => {
    expect(cardType('374215731451037')).toBe('AMEX')
  })
  test('it should be a of type Discover', () => {
    expect(cardType('6011111111111117')).toBe('Discover')
  })
  test('it should be an invalid card number', () => {
    expect(cardType('011111111111117')).toBe('Invalid card')
  }) 
})

describe('it should test the checkCardValidator 😎  💳', () => {
  test('it should test for valid AMEX', () => {
    expect(checkCardValidator('374215731451037')).toBe(true)
  })
  test('it should test for valid Mastercard', () => {
    expect(checkCardValidator('4026247034243351')).toBe(true)
  })
  test('it should test for valid Discover', () => {
    expect(checkCardValidator('6011447741702713')).toBe(true)
  })
  test('it should test for valid Visa', () => {
    expect(checkCardValidator('4338578687315481')).toBe(true)
  })
  test('it should test for invalid card', () => {
    expect(checkCardValidator('433857481')).toBe(false)
  })




})

