import styled from 'styled-components'

export const LoginFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20%;
  padding: 30px;
  text-align: center;
`;

export const LoginForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5%;
  width: 50%;
  flex-direction: column;
  
  > * {
    margin-bottom: 20px;
  }
`;

export const LoginFormTitle = styled.h1`
  color: #101820ff;
  font-size: 24px;
`

export const LoginFormInput = styled.input`
  outline: none;
  border: none;
  border-radius: 16px;
  padding: 15px;
  
  :focus {
    box-shadow: 0 0 0 2pt #f2aa4cff;
  }
  ::placeholder {
    font-size: 16px;
  }
`;

export const LoginFormSubmit = styled.button`
  border-radius: 16px;
  padding: 15px;
  background-color: #D8DACA;
  outline: none;
  border: 2px solid #f2aa4cff;
  background-color: #f2aa4cff;
  color: #101820ff;
  cursor: pointer;
  font-size: 20px;
  :hover,
  :focus {
    background-color: rgb(216, 218, 202);
  }
`;