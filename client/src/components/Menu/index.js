import React from "react";
import * as S from "./styles/styles";

const Menu = () => {
  return (
    <S.Container>
      <S.Menu>
        <S.Ul>
          <S.Li>
            <S.MenuLink to="/add">Add</S.MenuLink>
          </S.Li>
          <S.Li>
            <S.MenuLink to="/browse">Browse</S.MenuLink>
          </S.Li>
          <S.Li>
            <S.MenuLink to="/categories">Categories</S.MenuLink>
          </S.Li>
          <S.Li>
            <S.MenuLink to="/about">About</S.MenuLink>
          </S.Li>
        </S.Ul>
      </S.Menu>
    </S.Container>
  );
};

export default Menu;
