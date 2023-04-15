import { Resolvers } from 'graphql/generated/server-types'

import * as mutation from './mutation'
import * as query from './query'

export const resolvers: Resolvers = {
  Query: query,
  Mutation: mutation,
}
