import React from "react";
import dayjs from 'dayjs'
import LocalizedFormat from "dayjs/plugin/LocalizedFormat";
dayjs.extend(LocalizedFormat); // extend dayjs with LocalizedFormat plugin
import * as S from './styles/styles'

const TermCard = ({ id, title, text, createdAt, username }) => {
  return (
    <S.Card>
      <S.TitleLink to={`/terms/${id}`}>{title.toLowerCase()}</S.TitleLink>
      <S.Text>{text}</S.Text>
      <S.AuthorInfo>by <S.UserLink to={`/users/${username}`}>{username}</S.UserLink> {dayjs(+createdAt).format('LL')}</S.AuthorInfo>
    </S.Card>
  );
};

export default TermCard;
