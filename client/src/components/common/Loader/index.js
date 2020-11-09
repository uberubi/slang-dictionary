import React from "react";
import loaderSVG from "../../../images/tail-spin.svg";
import * as S from "./styles/styles";

const Loader = () => {
  return (
    <S.Container>
      <img src={loaderSVG} alt="Loading..." />
    </S.Container>
  );
};

export default Loader;
