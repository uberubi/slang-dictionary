import { useQuery } from "@apollo/client";
import React from "react";
import Loader from "../../components/common/Loader";
import TermCard from "../../components/TermCard";
import { GET_ALL_USER_TERMS_QUERY } from "../../queries/queries";
import * as S from "./styles/styles";

const UserProfile = (props) => {
  const username = props.match.params.username;
  const { data, loading } = useQuery(GET_ALL_USER_TERMS_QUERY, {
    variables: { username },
  });

  console.log(data?.getAllTermsByUser);
  return (
    <S.Container>
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
          />
        ))
      ) : (
        <Loader />
      )}
    </S.Container>
  );
};

export default UserProfile;
