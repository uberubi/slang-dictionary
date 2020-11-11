import { useQuery } from "@apollo/client";
import React from "react";
import Loader from "../../components/common/Loader";
import TermCard from "../../components/TermCard";
import { GET_ALL_USER_TERMS_QUERY } from "../../queries/queries";
import * as S from "./styles/styles";
import ScrollToTop from "../../components/ScrollToTop/index";

const UserProfile = (props) => {
  const username = props.match.params.username;
  const { data, loading } = useQuery(GET_ALL_USER_TERMS_QUERY, {
    variables: { username },
  });

  return (
    <S.Container>
      <ScrollToTop />
      <h1>Все добавленные слова пользователя:</h1>
      {!loading ? (
        data.getAllTermsByUser.map((term) => (
          <TermCard
            key={term.id}
            id={term.id}
            title={term.title}
            text={term.text}
            createdAt={term.createdAt}
            username={term.username}
            isSingleUser={true}
          />
        ))
      ) : (
        <Loader />
      )}
    </S.Container>
  );
};

export default UserProfile;
