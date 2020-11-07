import React, { useEffect, useState } from "react";

import TermCard from "../../components/TermCard/index";
import AddNewTermCard from "../../components/AddNewTerm/index";
import { HomeContainer, TermsContainer } from "./styles/styles";
import { useQuery } from "@apollo/client";
import { GET_TERMS_QUERY } from "../../queries/queries";

const Home = () => {
  const { loading, data, fetchMore, hasMore } = useQuery(GET_TERMS_QUERY, {
    variables: { after: null },
  });
  
  return (
    <HomeContainer>
      <TermsContainer
        onClick={() => {
          const { cursor: endCursor } = data.getTerms;

          fetchMore({
            variables: { after: endCursor },
            updateQuery: (prevResult, { fetchMoreResult }) => {
              // if (!fetchMoreResult.getTerms.hasMore) {
              //   console.log("that`s all");
              //   console.log("OLD", prevResult.getTerms);
              //   console.log("NEW", fetchMoreResult.getTerms);
              // } else {

              fetchMoreResult.getTerms.getTerms = [
                ...prevResult.getTerms.getTerms,
                ...fetchMoreResult.getTerms.getTerms,
              ];
              setIsFetch(false)
              return fetchMoreResult;
            },
          });
        }}
      >
        {!loading && data.getTerms.getTerms.map((term) => (
          <TermCard
            key={term.id}
            id={term.id}
            title={term.title}
            text={term.text}
            username={term.username}
            createdAt={term.createdAt}
          />
        ))}
      </TermsContainer>
      <AddNewTermCard />
    </HomeContainer>
  );
};

// const Home = () => {
//   const data = useQuery(GET_TERMS_QUERY);

//   const terms = !data.loading
//     ? data.data.getTerms.map((term) => {
//         return (
//           <TermCard
//             key={term.id}
//             id={term.id}
//             title={term.title}
//             text={term.text}
//             username={term.username}
//             createdAt={term.createdAt}
//           />
//         );
//       })
//     : null;
// console.log(!data.loading ? data : null)
//   return (
//     <HomeContainer>
//       <TermsContainer>{terms}</TermsContainer>
//       <AddNewTermCard />
//     </HomeContainer>
//   );
// };

export default Home;
