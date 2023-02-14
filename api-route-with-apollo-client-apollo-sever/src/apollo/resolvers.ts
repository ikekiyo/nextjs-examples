type Book = {
  title: String
  author: String
}

let books: Book[] = []

for (let i = 1; i <= 100; i++) {
  const book = {
    title: `book title ${i}`,
    author: `book author ${i}`,
  }
  books.push(book)
}

export const resolvers = {
  Query: {
    books: async (_parent: any, args: any, _context: any) => {
      if (args.offset != undefined && args.limit != undefined) {
        const end = args.limit + args.offset
        const start = args.offset
        return [...books].slice(start, end)
      } else {
        return [...books]
      }
    },
  },
}
