import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Book = {
  __typename?: 'Book'
  author: Scalars['String']
  title: Scalars['String']
}

export type CreateBookInput = {
  author: Scalars['String']
  title: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  createBook: Book
  updateUser: User
}

export type MutationCreateBookArgs = {
  createBook: CreateBookInput
}

export type MutationUpdateUserArgs = {
  updateUser: UpdateUserInput
}

export type Query = {
  __typename?: 'Query'
  books: Array<Book>
  user: User
  users: Array<User>
}

export type QueryBooksArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
}

export type QueryUserArgs = {
  userInput: UserInput
}

export type UpdateUserInput = {
  id: Scalars['ID']
  name: Scalars['String']
}

export type User = {
  __typename?: 'User'
  id: Scalars['ID']
  name: Scalars['String']
}

export type UserInput = {
  id: Scalars['ID']
}

export type BooksQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
}>

export type BooksQuery = {
  __typename?: 'Query'
  books: Array<{ __typename?: 'Book'; title: string; author: string }>
}

export const BooksDocument = gql`
  query Books($offset: Int, $limit: Int) {
    books(offset: $offset, limit: $limit) {
      title
      author
    }
  }
`

/**
 * __useBooksQuery__
 *
 * To run a query within a React component, call `useBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBooksQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useBooksQuery(
  baseOptions?: Apollo.QueryHookOptions<BooksQuery, BooksQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<BooksQuery, BooksQueryVariables>(
    BooksDocument,
    options
  )
}
export function useBooksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BooksQuery, BooksQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<BooksQuery, BooksQueryVariables>(
    BooksDocument,
    options
  )
}
export type BooksQueryHookResult = ReturnType<typeof useBooksQuery>
export type BooksLazyQueryHookResult = ReturnType<typeof useBooksLazyQuery>
export type BooksQueryResult = Apollo.QueryResult<
  BooksQuery,
  BooksQueryVariables
>
