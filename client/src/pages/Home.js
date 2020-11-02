import React from "react";
import styled from "styled-components";

import TermCard from "../components/TermCard";
import AddNewTermCard from "../components/AddNewTerm";

const HomeContainer = styled.div`
  display: flex;
  margin: 0 20%;
  border: 2px solid yellow;
  min-width: 1000px;

`;

const TermsContainer = styled.div`
  margin: 20px;
  > * {
    margin-bottom: 20px;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <TermsContainer>
        <TermCard />
        <TermCard />
        <TermCard />
        <TermCard />
        <TermCard />
        <TermCard />
        <TermCard />
        <TermCard />
      </TermsContainer>
      <AddNewTermCard />
    </HomeContainer>
  );
};

export default Home;
