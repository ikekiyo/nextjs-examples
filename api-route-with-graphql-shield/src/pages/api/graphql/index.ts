import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { applyMiddleware } from 'graphql-middleware'

import { resolvers } from 'resolvers/resolvers'
import { typeDefs } from 'graphql/schema'

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

const server = new ApolloServer({
  schema: applyMiddleware(schema),
})

export default startServerAndCreateNextHandler(server, {
  context: async (ctx) => {
    return {}
  },
})
