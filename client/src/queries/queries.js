import { gql } from "@apollo/client";

export const GET_TERMS_QUERY = gql`
query getTerms($after: String){
  getTerms(after: $after) {
    cursor
    hasMore
    getTerms {
      id
      title
      text
      createdAt
      username
      cursor
    }
  }
}
`;

export const GET_ALL_USER_TERMS_QUERY = gql`
  query getAllTermsByUser($username: String!) {
    getAllTermsByUser(username: $username) {
      id
      title
      text
      createdAt
      username
    }
  }
`

export const GET_TERM_QUERY = gql`
  query getTerm($termId: ID!){
    getTerm(termId: $termId) {
    id
    title
    text
    username
    createdAt
  }
  }
`;

export const CREATE_TERM_MUTATION = gql`
  mutation createTerm($title: String!, $text: String!) {
    createTerm(title: $title, text: $text) {
      id
      title
      text
      createdAt
    }
  }
`

export const LOGIN_USER_MUTATION = gql`
  mutation register($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export const REGISTER_USER_MUTATION = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;
