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
    console.log(data?.terms.hasMore);
    if (
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight &&
      data?.terms.hasMore &&
      !loading
    ) {
      const { cursor: endCursor } = data.terms;
      fetchMore({
        variables: { after: endCursor },
        updateQuery: (prevResult, { fetchMoreResult }) => {
          fetchMoreResult.terms.terms = [
            ...prevResult.terms.terms,
            ...fetchMoreResult.terms.terms,
          ];
          return fetchMoreResult;
        },
      });
    }
  };
  return (
    <S.Container>
      {data?.terms.terms.map((term) => (
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
