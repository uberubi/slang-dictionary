import React, { useRef } from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: #f2aa4cff;
  height: 10vh;

  .sticky {
    position: fixed;
    width: 100%;
  }
`;
const Title = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`;

const Header = () => {
  window.onscroll = function () {
    const {offsetTop} = navbarRef.current
    console.log(offsetTop)
    // addSticky()
    if (window.pageYOffset >= offsetTop) {
      navbarRef.classList.add('sticky')
      console.log('add');
    } else {
      navbarRef.classList.remove('sticky')
      console.log('removed');

    }
  }
  const navbarRef = useRef()  

  // function addSticky() {
  //   if (window.pageYOffset >= sticky) {
  //     navbarRef.classList.add('sticky')
  //     console.log('dsad', navbarRef.offsetTop)
  //   } else {
  //     navbarRef.classList.remove('sticky')
  //   }
  // }

  return (
    <HeaderContainer ref={navbarRef}>
      <Title>RUSSIAN SLANG DICTIONARY</Title>
    </HeaderContainer>
  );
};

export default Header;
