import React from "react";
import * as S from "./styles/styles";
import Menu from "../Menu/index";
import LoginInfo from "../LoginInfo/index";

const Header = () => {
  return (
    <S.Container>
      <S.Inner>
        <S.Title>
          <S.TitleLink to="/">ЯUSSIAN SLANG</S.TitleLink>
        </S.Title>
        <Menu />
        <LoginInfo />
      </S.Inner>
    </S.Container>
  );
};

export default Header;
