const { ApolloServer } = require("apollo-server");
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 4000 }).then(({ url }: any) => {
  console.log(`🚀 Server ready at ${url}`);
});
