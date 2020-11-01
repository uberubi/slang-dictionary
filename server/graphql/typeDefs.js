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
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createTerm(title: String!, text: String!): Term!
    deleteTerm(termId: ID!): String!
  }
  type Query {
    getUsers: [User]
    getTerms: [Term]
    getTerm(termId: ID!): Term
  }
`;
