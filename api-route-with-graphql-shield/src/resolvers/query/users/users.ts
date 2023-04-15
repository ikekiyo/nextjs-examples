import { QueryResolvers, User } from 'graphql/generated/server-types'

export const users: QueryResolvers['users'] = async (
  _parent,
  _args,
  _context,
  _info
) => {
  const users: User[] = [
    {
      id: '1',
      name: 'Yamada Taro',
    },
    {
      id: '2',
      name: 'Suzuki Hanako',
    },
    {
      id: '3',
      name: 'Tanaka Jiro',
    },
  ]

  return users
}
