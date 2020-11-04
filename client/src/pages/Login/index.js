import React, { useState, useContext } from "react";
import {
  LoginFormContainer,
  LoginFormTitle,
  LoginForm,
  LoginFormInput,
  LoginFormSubmit,
} from "./styles/styles";
import { AuthContext } from "../../context/auth";
import { useMutation } from "@apollo/client";
import { LOGIN_USER_MUTATION } from "../../queries/queries";

const Login = (props) => {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loginUser, { loading }] = useMutation(LOGIN_USER_MUTATION, {
    update(_, { data: { login: userData } }) {
      context.login(userData);
      props.history.push("/");
      console.log("ПОЛЬЗОВАТЕЛЬ ДОБАВЛЕН");
    },
    onError(err) {
      console.log("ОШИБКА ПРОИЗОШЛА");
      console.log(err);
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  function onChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    loginUser();
  }

  return (
    <LoginFormContainer>
      <LoginForm onSubmit={onSubmit}>
        <LoginFormTitle>
          Войдите, используя имя пользователя и пароль, который указали при
          регистрации
        </LoginFormTitle>
        <LoginFormInput
          name="username"
          value={values.username}
          onChange={onChange}
          placeholder="Имя"
          type="text"
          autoComplete="nope"
        />
        <LoginFormInput
          name="password"
          value={values.password}
          onChange={onChange}
          placeholder="Пароль"
          type="password"
        />
        <LoginFormSubmit>Войти!</LoginFormSubmit>
      </LoginForm>
    </LoginFormContainer>
  );
};

export default Login;
