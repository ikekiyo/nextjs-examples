import { QueryResolvers, Book } from "@/graphql/generated/server-types";

export const books: QueryResolvers["books"] = async (
  _parent,
  args,
  _context,
  _info
) => {
  let books: Book[] = [];

  for (let i = 1; i <= 100; i++) {
    const book = {
      title: `book title ${i}`,
      author: `book author ${i}`,
    };
    books.push(book);
  }
  if (args.offset != undefined && args.limit != undefined) {
    const end = args.limit + args.offset;
    const start = args.offset;
    return [...books].slice(start, end);
  } else {
    return [...books];
  }
};
