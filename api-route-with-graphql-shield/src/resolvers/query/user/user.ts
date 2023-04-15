import { QueryResolvers, User } from 'graphql/generated/server-types'

export const user: QueryResolvers['user'] = async (
  _parent,
  args,
  _context,
  _info
) => {
  const user: User = {
    id: args.userInput.id,
    name: 'Yamada Taro',
  }

  return user
}
