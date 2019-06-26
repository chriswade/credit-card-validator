const { ApolloServer, gql } = require("apollo-server");
const { buildFederatedSchema } = require("@apollo/federation");
import { cardType, lluhnCheck } from "./resolver";

// Construct a schema, using GraphQL schema language
const typeDefs = gql(`
  type Query {
    hello: String
    GetCard(fullName: String!, cardNumber: ID!, CSV: Int!): CardDetails
  }

  type CardDetails {
    fullName: String
    isValid: Boolean
    cardType: String
  }
`);

// The root provides a resolver function for each API endpoint
const resolvers = {
  Query: {
    GetCard(_: any, args: any) {
      console.log(args)
      return {
        isValid: lluhnCheck(args.cardNumber),
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

const server = new ApolloServer({
  schema: buildFederatedSchema([
    {
      typeDefs,
      resolvers
    }
  ])
});

server.listen({ port: 4000 }).then(({ url }: any) => {
  console.log(`🚀 Server ready at ${url}`);
});
