import React from "react";
import * as S from "./styles/styles";

const NewTerm = () => {
  return (
    <S.Container>
      <S.Form>
        <S.InputTitle name="title" placeholder="введите слово или выражение" />
        <S.InputText name="text" placeholder="добавьте описание" />
        <S.Button>Добавить!</S.Button>
      </S.Form>
    </S.Container>
  );
};

export default NewTerm;
