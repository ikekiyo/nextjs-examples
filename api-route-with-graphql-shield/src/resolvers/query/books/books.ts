import { QueryResolvers, Book } from 'graphql/generated/server-types'

export const books: QueryResolvers['books'] = async (
  _parent,
  args,
  _context,
  _info
) => {
  const books: Book[] = [
    {
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
    },
    {
      title: 'Jurassic Park',
      author: 'Michael Crichton',
    },
    {
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
    },
  ]

  if (args.offset != undefined && args.limit != undefined) {
    const end = args.limit + args.offset
  } else {
    return [...books]
  }

  return books
}
