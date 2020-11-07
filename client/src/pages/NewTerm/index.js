import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_TERM_MUTATION, GET_TERMS_QUERY } from "../../queries/queries";
import * as S from "./styles/styles";

const NewTerm = (props) => {
  const [values, setValues] = useState({
    title: '',
    text: ''
  });

  const [createTerm, { error }] = useMutation(CREATE_TERM_MUTATION, {
    update() {
      setValues({
        title: '',
        text: ''
      })
      props.history.push("/");
    },
    variables: values,
    onError(err) {
      console.log("ERROR::: ", err);
    },
  });

  function onChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    createTerm();
  }

  return (
    <S.Container>
      <S.Form onSubmit={onSubmit}>
        <S.InputTitle
          onChange={onChange}
          name="title"
          placeholder="введите слово или выражение"
        />
        <S.InputText
          onChange={onChange}
          name="text"
          placeholder="добавьте описание"
        />
        <S.Button>Добавить!</S.Button>
      </S.Form>
    </S.Container>
  );
};

export default NewTerm;
