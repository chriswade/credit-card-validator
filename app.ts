const { ApolloServer, gql } = require("apollo-server");
const { buildFederatedSchema } = require("@apollo/federation");
import { isValid } from "./resolver";

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
 CardDetails: {
   __resolveReferance() {
     return ''
   }
 },
 Query: {
  GetCard(_: any, args: any) {
    console.log(args.cardNumber)
    return args.cardNumber
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

server.listen({ port: 4000 }).then(({ url }:any) => {
  console.log(`🚀 Server ready at ${url}`);
});
