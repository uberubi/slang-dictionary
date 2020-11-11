import React from "react";
import * as S from "./styles/styles";
import TermsPagination from "../../components/TermsPagination";
import { useQuery } from "@apollo/client";
import { GET_TERMS_QUERY } from "../../queries/queries";

const Home = () => {

  const data = useQuery(GET_TERMS_QUERY, {
    variables: { after: null },
    notifyOnNetworkStatusChange: true,
  });


  return (
    <S.Container >
      <TermsPagination data={data} />
    </S.Container>
  );
};

export default Home;
