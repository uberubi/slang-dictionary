import { useQuery } from "@apollo/client";
import React from "react";
import TermCard from "../../components/TermCard";
import { GET_TERM_QUERY } from "../../queries/queries";
import * as S from "./styles/styles";

const SingleTerm = (props) => {
  const termId = props.match.params.termsId;

  const { data, loading } = useQuery(GET_TERM_QUERY, {
    variables: { termId },
  });

  return (
    <S.Container>
      {!loading ? (
        <TermCard
          key={data?.getTerm.id}
          id={data?.getTerm.id}
          title={data?.getTerm.title}
          text={data?.getTerm.text}
          createdAt={data?.getTerm.createdAt}
          username={data?.getTerm.username}
        />
      ) : (
        <div>Loading...</div>
      )}
    </S.Container>
  );
};

export default SingleTerm;
