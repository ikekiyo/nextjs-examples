import { MutationResolvers, User } from 'graphql/generated/server-types'

export const updateUser: MutationResolvers['updateUser'] = async (
  _parent,
  args,
  _context,
  _info
) => {
  const book: User = {
    id: args.updateUser.id,
    name: args.updateUser.name,
  }

  return book
}
