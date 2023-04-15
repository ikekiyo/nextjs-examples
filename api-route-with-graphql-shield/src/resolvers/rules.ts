import { rule, or } from 'graphql-shield'

// Adminユーザー認証
export const isAdmin = rule({ cache: 'contextual' })(
  async (_parent, _args, ctx, _info) => {
    return ctx.user !== null && ctx.user.admin !== null
  }
)

// 一般ユーザー認証
export const isUser = rule({ cache: 'contextual' })(
  async (_parent, _args, ctx, _info) => {
    return ctx.user !== null
  }
)

// 認証済み
export const isAuthenticated = or(isUser, isAdmin)

// 未認証
export const isNotAuthenticated = rule({ cache: 'contextual' })(
  async (_parent, _args, _ctx, _info) => {
    return true
  }
)
