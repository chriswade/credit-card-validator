const { ApolloServer } = require('apollo-server');
const typeDefs = require('../types/schema');

const server = new ApolloServer({ typeDefs });

server.listen().then((url: any) => {
  console.log(`🚀 Server ready at ${url}`);
});