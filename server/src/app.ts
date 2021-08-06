import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./graphql/resolvers/hello";
import { ReservationResolver } from "./graphql/resolvers/reservation";

const main = async () => {
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, ReservationResolver],
    }),
  });

  const app: any = express();

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log(`🚀 Server started on localhost:4000${apolloServer.graphqlPath}`);
  });
};

main().catch((err) => {
  console.error(err);
});
