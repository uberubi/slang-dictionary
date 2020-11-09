import React from "react";
import * as S from "./styles/styles";
import TermsPagination from "../../components/TermsPagination";
import ScrollToTop from "../../components/ScrollToTop";

const Home = () => {
  return (
    <>
      <S.Container>
      <ScrollToTop />
        <TermsPagination />
      </S.Container>
      
    </>
  );
};

export default Home;
