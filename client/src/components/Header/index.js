import React, { useContext, useRef } from "react";
import { AuthContext } from "../../context/auth";
import * as S from './styles/styles'

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  window.onscroll = function () {
    const { offsetTop } = navbarRef.current;
    if (window.pageYOffset > offsetTop) {
      navbarRef.current.classList.add("sticky");
    } else {
      navbarRef.current.classList.remove("sticky");
    }
  };

  const navbarRef = useRef();

  return (
    <S.Container ref={navbarRef}>
      <S.Logo></S.Logo>
      <S.Title>
        <S.TitleLink to="/">ЯUSSIAN SLANG</S.TitleLink>
      </S.Title>
      {user ? (
        <S.LoginInfo>
          <S.User>{user.username}</S.User>
          <p onClick={() => logout()}>Logout</p>
        </S.LoginInfo>
      ) : (
        <S.LoginInfo>
          <S.LoginInfoLink to="/login">Login</S.LoginInfoLink>
          <S.LoginInfoLink to="/register">Register</S.LoginInfoLink>
        </S.LoginInfo>
      )}
    </S.Container>
  );
};

export default Header;
