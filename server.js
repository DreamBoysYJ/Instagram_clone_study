import "dotenv/config";
import http from "http";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import logger from "morgan";

import { typeDefs, resolvers } from "./schema";
import { getUser, protectResolver } from "./users/users.utils";
import { graphql } from "graphql";

const apollo = new ApolloServer({
  resolvers,
  typeDefs,

  context: async ({ req }) => {
    if (req) {
      return {
        loggedInUser: await getUser(req.headers.token),
      };
    }
  },
});

const PORT = process.env.PORT;

const app = express();
app.use(logger("tiny"));
apollo.applyMiddleware({ app });
app.use("/static", express.static("uploads"));

const httpServer = http.createServer(app);
apollo.installSubscriptionHandlers(httpServer);

httpServer.listen(PORT, () => {
  console.log(`🚀Server is running on http://localhost:${PORT}/graphql ✅`);
});
