import React, { useRef, useCallback } from "react";
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

  const observer = useRef();
  const lastTerm = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && data?.getTerms.hasMore) {
          console.log("visible");
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
      });
      if (node) observer.current.observe(node);
      console.log(node);
    },
    [loading, data?.getTerms.hasMore]
  );

  return (
    <S.Container>
      {data?.getTerms.getTerms.map((term, index) => {
        return (
          <TermCard
            key={term.id}
            id={term.id}
            title={term.title}
            text={term.text}
            username={term.username}
            createdAt={term.createdAt}
            lastTerm={
              data.getTerms.getTerms.length === index + 1 ? lastTerm : null
            }
          />
        );
      })}
      {loading && <Loader />}
    </S.Container>
  );
};

export default TermsPagination;
