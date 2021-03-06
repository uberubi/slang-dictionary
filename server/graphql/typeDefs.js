const { gql } = require("apollo-server");

module.exports = gql`
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }
  type Term {
    id: ID!
    title: String!
    text: String!
    createdAt: String!
    username: String!
    cursor: String!
    likes: [Like]!
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  type Like {
    id: ID!
    createdAt: String!
    username: String!
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createTerm(title: String!, text: String!): Term!
    deleteTerm(termId: ID!): String!
    likeTerm(termId: ID!): Term!
  }

  """
  Simple wrapper around our list of launches that contains a cursor to the
  last item in the list. Pass this cursor to the launches query to fetch results
  after these.
  """
  type TermConnection {
    cursor: String!
    hasMore: Boolean!
    getTerms: [Term]
  }

  type Query {
    users: [User]
    getTerms(
      """
      The number of results to show. Must be >= 1. Default = 5
      """
      pageSize: Int
      """
      If you add a cursor here, it will only return results _after_ this cursor
      """
      after: String
    ): TermConnection!
    getTerm(termId: ID!): Term
    getAllTermsByUser(username: String!): [Term]
  }
`;
// const { gql } = require("apollo-server");

// module.exports = gql`
//   type User {
//     id: ID!
//     email: String!
//     token: String!
//     username: String!
//     createdAt: String!
//   }
//   type Term {
//     id: ID!
//     title: String!
//     text: String!
//     createdAt: String!
//     username: String!
//     cursor: Int!
//   }
//   input RegisterInput {
//     username: String!
//     password: String!
//     confirmPassword: String!
//     email: String!
//   }
//   type Mutation {
//     register(registerInput: RegisterInput): User!
//     login(username: String!, password: String!): User!
//     createTerm(title: String!, text: String!): Term!
//     deleteTerm(termId: ID!): String!
//   }
//   type Query {
//     getUsers: [User]
//     getTerms: [Term]
//     getTerm(termId: ID!): Term
//   }
// `;
