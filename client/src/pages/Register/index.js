import React, { useState, useContext } from "react";
import {
  RegisterFormContainer,
  RegisterFormTitle,
  RegisterForm,
  RegisterFormInput,
  RegisterFormSubmit,
} from "./styles/styles";
import { AuthContext } from "../../context/auth";
import { useMutation } from "@apollo/client";
import { REGISTER_USER_MUTATION } from "../../queries/queries";
const Register = (props) => {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({})
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [addUser, { loading }] = useMutation(REGISTER_USER_MUTATION, {
    update(_, { data: { register: userData } }) {
      context.login(userData);
      props.history.push("/");
      console.log('ПОЛЬЗОВАТЕЛЬ ДОБАВЛЕН')
    },
    onError(err) {
      console.log('ОШИБКА ПРОИЗОШЛА')
      console.log(err)
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  function onChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    addUser();
  }

  return (
    <RegisterFormContainer>
      <RegisterForm onSubmit={onSubmit}>
        <RegisterFormTitle>
          Пройдите регистрацию чтобы иметь возможность добавлять свои слова и
          выражения!
        </RegisterFormTitle>
        <RegisterFormInput
          name="email"
          value={values.email}
          onChange={onChange}
          placeholder="Емаил"
          type="email"
        />
        <RegisterFormInput
          name="username"
          value={values.username}
          onChange={onChange}
          placeholder="Имя"
          type="text"
        />
        <RegisterFormInput
          name="password"
          value={values.password}
          onChange={onChange}
          placeholder="Пароль"
          type="password"
        />
        <RegisterFormInput
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={onChange}
          placeholder="Подтвердите пароль"
          type="password"
        />
        <RegisterFormSubmit>Зарегистрироваться!</RegisterFormSubmit>
      </RegisterForm>
    </RegisterFormContainer>
  );
};

export default Register;
