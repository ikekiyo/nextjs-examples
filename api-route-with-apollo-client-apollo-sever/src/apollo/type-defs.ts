import { gql } from 'graphql-tag'

export const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books(offset: Int, limit: Int): [Book]
  }
`