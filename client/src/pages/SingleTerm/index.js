import { useQuery } from "@apollo/client";
import React from "react";
import { GET_TERM_QUERY } from "../../queries/queries";

const SingleTerm = (props) => {
  const termId = props.match.params.termsId;

  const data = useQuery(GET_TERM_QUERY, {
    variables: { termId },
  });
  console.log(data);

  return (
    <>
      {!data.loading ? (
        <>
          <div>{data.data.getTerm.title}</div>
          <div>{data.data.getTerm.text}</div>
          <div>{data.data.getTerm.createdAt}</div>
          <div>{data.data.getTerm.username}</div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default SingleTerm;
