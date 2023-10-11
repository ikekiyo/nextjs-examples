import { MutationResolvers, Book } from "~/graphql/generated/resolvers-types";

export const createBook: MutationResolvers["createBook"] = async (
  _parent,
  args,
  _context,
  _info
) => {
  let book: Book = {
    ...args.createBook,
  };

  return book;
};
