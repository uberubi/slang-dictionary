import React from "react";
import * as S from "./styles/styles";
import { Link } from "react-router-dom";
const AddNewTerm = () => {
  return (
    <S.Wrapper>
      Добавить новое слово <br />
      <Link to="/add">+</Link>
    </S.Wrapper>
  );
};

export default AddNewTerm;
