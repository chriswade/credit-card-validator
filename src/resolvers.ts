const { UserInputError } = require("apollo-server");
import { cardType, checkCardValidator } from "./index";

export const resolvers = {
  Query: {
    GetCard(_: any, args: any) {
      if(String(args.CSV).length !== 3) {
        throw new UserInputError('Please enter valid CSV')
      } else if(args.cardNumber.length < 13 || args.cardNumber.length > 16) {
        throw new UserInputError('please input a valid credit card number')
      }
      return {
        isValid: checkCardValidator(args.cardNumber),
        fullName: args.fullName,
        cardType: cardType(args.cardNumber)
      }
    }
  },
  CardDetails: {
    __resolveReferance() {
      return []
    }
  }
};