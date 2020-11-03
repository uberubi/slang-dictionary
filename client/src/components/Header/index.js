import React, { useRef } from "react";
import {HeaderContainer, Title} from './styles/styles'


const Header = () => {
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
    <HeaderContainer ref={navbarRef}>
      <Title>RUSSIAN SLANG DICTIONARY</Title>
    </HeaderContainer>
  );
};

export default Header;
