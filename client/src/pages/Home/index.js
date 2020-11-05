import React from "react";

import TermCard from "../../components/TermCard/index";
import AddNewTermCard from "../../components/AddNewTerm/index";
import { HomeContainer, TermsContainer } from "./styles/styles";
import { useQuery } from "@apollo/client";
import { GET_TERMS_QUERY } from "../../queries/queries";

const Home = () => {
  const data = useQuery(GET_TERMS_QUERY);

  const terms = !data.loading
    ? data.data.getTerms.map((term) => {
        return (
          <TermCard
            key={term.id}
            id={term.id}
            title={term.title}
            text={term.text}
            username={term.username}
            createdAt={term.createdAt}
          />
        );
      })
    : null;
  // const terms = !data.loading ? console.log(data.data.getTerms) : null
  return (
    <HomeContainer>
      <TermsContainer>
        {terms}
      </TermsContainer>
      <AddNewTermCard />
    </HomeContainer>
  );
};

export default Home;
