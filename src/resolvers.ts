const { UserInputError } = require("apollo-server");
import { cardType, checkCardValidator } from "./index";

export const resolvers = {
  Query: {
    GetCard(_: any, args: any) {
      if(String(args.CSV).length !== 3) {
        console.log()
        throw new UserInputError('Please enter valid card numver')
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