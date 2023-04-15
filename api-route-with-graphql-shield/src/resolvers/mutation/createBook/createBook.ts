import { MutationResolvers, Book } from 'graphql/generated/server-types'

export const createBook: MutationResolvers['createBook'] = async (
  _parent,
  args,
  _context,
  _info
) => {
  const book: Book = {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  }

  return book
}
