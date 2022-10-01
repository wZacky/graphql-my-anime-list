import { ApolloServer } from "apollo-server";
import database from "./config/database.js";
import resolvers from "./resolvers.js";
import typeDefinitions from "./typeDefs.js";

const server = new ApolloServer({
  typeDefs: typeDefinitions,
  resolvers,
});

server.listen().then(({url}) => {
  console.log(`Server ready at ${url}`);
});

database();