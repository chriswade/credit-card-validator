import { gql } from "apollo-server";

export const typeDefs = gql(`
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