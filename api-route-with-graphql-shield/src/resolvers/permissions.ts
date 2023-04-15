import { shield } from 'graphql-shield'

import * as rules from './rules'

export const permissions = shield({
  Query: {
    // 認証不要
    books: rules.isNotAuthenticated,
  },
  Mutation: {
    // 一般ユーザー認証
    createBook: rules.isAuthenticated,
  },
})
