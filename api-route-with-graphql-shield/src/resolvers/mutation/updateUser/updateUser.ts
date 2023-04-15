import { MutationResolvers, User } from 'graphql/generated/server-types'

export const updateUser: MutationResolvers['updateUser'] = async (
  _parent,
  _args,
  _context,
  _info
) => {
  const book: User = {
    id: '1',
    name: 'Yamada Taro',
  }

  return book
}
