import { shield } from 'graphql-shield'

import * as rules from './rules'

export const permissions = shield({
  Query: {
    // 認証不要
    books: rules.isNotAuthenticated,

    // 一般ユーザー認証
    user: rules.isAuthenticated,

    // 管理者ユーザー認証
    users: rules.isAdmin,
  },
  Mutation: {
    // 一般ユーザー認証
    updateUser: rules.isAuthenticated,

    // 管理者ユーザー認証
    createBook: rules.isAdmin,
  },
})
