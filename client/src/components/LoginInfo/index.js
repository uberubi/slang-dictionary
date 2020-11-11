import React, { useContext } from "react";
import * as S from "./styles/styles";
import { AuthContext } from "../../context/auth";

const LoginInfo = () => {
  const { user, logout } = useContext(AuthContext);
console.log(user)
  function handleClick() {
    logout()
  }
  return (
    <>
      {user ? (
        <S.LoginInfo>
          <S.UserLink to={`/users/${user.username}`}>{user.username}</S.UserLink>
          <S.Logout onClick={handleClick}>Logout</S.Logout>
        </S.LoginInfo>
      ) : (
        <S.LoginInfo>
          <S.LoginInfoLink to="/login">Login</S.LoginInfoLink>
          <S.LoginInfoLink to="/register">Register</S.LoginInfoLink>
        </S.LoginInfo>
      )}
    </>
  );
};

export default LoginInfo;
