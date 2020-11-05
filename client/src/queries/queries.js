import { gql } from "@apollo/client";

export const GET_TERMS_QUERY = gql`
  {
    getTerms {
      id
      title
      text
      username
      createdAt
    }
  }
`;

export const GET_TERM_QUERY = gql`
  query($termId: ID!){
    getTerm(termId: $termId) {
    id
    title
    text
    username
    createdAt
  }
  }
`;

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
