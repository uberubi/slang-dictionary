import React from "react";
import * as S from "./styles/styles";
import { useQuery } from "@apollo/client";
import { GET_TERMS_QUERY } from "../../queries/queries";
import Loader from "../common/Loader/index";
import TermCard from "../TermCard/index";

const TermsPagination = () => {

  const { loading, data, fetchMore } = useQuery(GET_TERMS_QUERY, {
    variables: { after: null },
    notifyOnNetworkStatusChange: true,
  });

  window.onscroll = () => {
    console.log(data?.getTerms.hasMore);
    if (
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight &&
      data?.getTerms.hasMore &&
      !loading
    ) {
      const { cursor: endCursor } = data.getTerms;
      fetchMore({
        variables: { after: endCursor },
        updateQuery: (prevResult, { fetchMoreResult }) => {
          fetchMoreResult.getTerms.getTerms = [
            ...prevResult.getTerms.getTerms,
            ...fetchMoreResult.getTerms.getTerms,
          ];
          return fetchMoreResult;
        },
      });
    }
  };
  return (
    <S.Container>
      {data?.getTerms.getTerms.map((term) => (
        <TermCard
          key={term.id}
          id={term.id}
          title={term.title}
          text={term.text}
          username={term.username}
          createdAt={term.createdAt}
        />
      ))}
      {loading && <Loader />}
    </S.Container>
  );
};

export default TermsPagination;
