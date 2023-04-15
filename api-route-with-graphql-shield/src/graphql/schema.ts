import { gql } from 'graphql-tag'

export const typeDefs = gql`
  type Book {
    title: String!
    author: String!
  }

  type User {
    id: ID!
    name: String!
  }

  input UpdateUserInput {
    id: ID!
    name: String!
  }

  input CreateBookInput {
    title: String!
    author: String!
  }

  type Query {
    books(offset: Int, limit: Int): [Book!]!
    user: User!
    users: [User!]!
  }

  type Mutation {
    updateUser(updateUser: UpdateUserInput): User!
    createBook(createBook: CreateBookInput!): Book!
  }
`
