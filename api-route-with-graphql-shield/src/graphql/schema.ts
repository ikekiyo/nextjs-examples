import { gql } from 'graphql-tag'

export const typeDefs = gql`
  type Book {
    title: String!
    author: String!
  }

  input CreateBook {
    title: String!
    author: String!
  }

  type Query {
    books(offset: Int, limit: Int): [Book!]
  }

  type Mutation {
    createBook(createBook: CreateBook!): Book!
  }
`
