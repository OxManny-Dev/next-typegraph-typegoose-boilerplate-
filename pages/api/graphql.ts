import {ApolloServer} from '@apollo/server';
import {startServerAndCreateNextHandler} from '@as-integrations/next';

import {buildSchema} from 'type-graphql';
import {UserResolver} from "@/resolvers/UserResolver";
import mongoose from "mongoose";

const createSchema = async () => {

  await mongoose.connect('mongodb://localhost:27017/testdb');

  return await buildSchema({
    resolvers: [UserResolver],
    validate: {forbidUnknownValues: false}
  });
};

const createServer = async () => {
  const schema = await createSchema();

  const server = new ApolloServer({
    schema,
  });

  return server;
};

export default startServerAndCreateNextHandler(await createServer());