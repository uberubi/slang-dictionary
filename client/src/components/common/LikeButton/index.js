import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { LIKE_TERM_MUTATION } from "../../../queries/queries";
import * as S from "./styles/styles";

const LikeButton = ({ user, id, likes }) => {
  const [liked, setLiked] = useState(false);


  useEffect(() => {

    if (user && likes.find((like) => like.username === user.username)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [user, likes]);

  const [likePost] = useMutation(LIKE_TERM_MUTATION, {
    variables: { termId: id },
  });

  const likeButton = user ? (
    liked ? (
      <S.Button color="red">Liked</S.Button>
    ) : (
      <S.Button color="black">Not Liked</S.Button>
    )
  ) : (
    <S.Button color="black">
      <S.Link to="/login">Like</S.Link>
    </S.Button>
  );

  return <S.Container onClick={likePost}>{likeButton}<S.Count>{likes.length}</S.Count></S.Container>;
};

export default LikeButton;
