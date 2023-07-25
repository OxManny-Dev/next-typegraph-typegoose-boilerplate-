import {ApolloServer} from '@apollo/server';
import {startServerAndCreateNextHandler} from '@as-integrations/next';

import {buildSchema} from 'type-graphql';
import {UserResolver} from "@/lib/Resolvers/UserResolver";
import mongoose from "mongoose";
import path from "path";
import {ViewerResolver} from "@/lib/Resolvers/ViewerResolver";

const createSchema = async () => {

  await mongoose.connect('mongodb://localhost:27017/testdb');
  return await buildSchema({
    resolvers: [
      UserResolver,
      ViewerResolver,
    ],
    // https://github.com/MichalLytek/type-graphql/issues/1397#issuecomment-1351432122
    validate: {forbidUnknownValues: false},
    emitSchemaFile: path.join(__dirname, '..', 'schema.graphql'),
  });
};

const createServer = async () => {
  const schema = await createSchema();

  return new ApolloServer({
    schema,
  });
};

export default startServerAndCreateNextHandler(await createServer());