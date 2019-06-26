import express from "express";
import graphqlHTTP from 'express-graphql'
import { buildSchema } from 'graphql'

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
    GetCard(fullName: String!, cardNumber: ID!, CSV: Int!): [String]
    rollDice(numDice: Int!, numSides: Int): [Int]
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  GetCard: (args: any) => {
    console.log(args)
    return [args.fullName, args.cardNumber, args.CSV];
  },
  rollDice: function ({numDice, numSides}: any) {
    var output = [];
    for (var i = 0; i < numDice; i++) {
      output.push(1 + Math.floor(Math.random() * (numSides || 6)));
    }
    return output;
  }
  // isValid: () => {
  //   return true
  // },
  // cardType: () => {
  //   return 'Visa'
  // }
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');