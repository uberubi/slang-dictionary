import React, { useContext } from "react";
import dayjs from "dayjs";
dayjs.extend(relativeTime); // extend dayjs with relativeTime plugin for using .fromNow() method
import relativeTime from "dayjs/plugin/relativeTime";
import * as S from "./styles/styles";
import LikeButton from "../common/LikeButton";
import { AuthContext } from "../../context/auth";
const TermCard = ({
  id,
  title,
  text,
  createdAt,
  username,
  likes,
  lastTermRef,
}) => {
  const { user } = useContext(AuthContext);
  return (
    <S.Card ref={lastTermRef}>
      <S.TitleLink to={`/terms/${id}`}>{title.toLowerCase()}</S.TitleLink>
      <S.Text>{text}</S.Text>
      <S.AuthorInfo>
        by <S.UserLink to={`/users/${username}`}>{username}</S.UserLink>{" "}
        {dayjs(createdAt).fromNow()}
      </S.AuthorInfo>
      <LikeButton id={id} likes={likes} user={user} />
    </S.Card>
  );
};

export default TermCard;
