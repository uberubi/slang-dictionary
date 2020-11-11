import React, { useEffect, useState } from "react";
import arrowUp from "../../images/arrow-up.svg";
import * as S from "./styles/styles";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  function toggleVisibility() {
    if (window.pageYOffset > 300) {
      console.log("true");
      setIsVisible(true);
    } else {
      console.log("false");
      setIsVisible(false);
    }
  }

  function handleGoTop() {
    console.log("clicked");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      {isVisible && (
        <S.Container>
          <S.ArrowImage onClick={handleGoTop} src={arrowUp} alt="arrow up" />
        </S.Container>
      )}
    </>
  );
};

export default ScrollToTop;
