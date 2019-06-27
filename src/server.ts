const { ApolloServer, UserInputError } = require("apollo-server");
const { buildFederatedSchema } = require("@apollo/federation");
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";

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
