import React from "react";
import { Card, Title, Text, Date, Username } from "./styles/styles";

const TermCard = ({title, text, createdAt, username}) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Text>{text}</Text>
      <Date>{createdAt}</Date>
      <Username>{username}</Username>
    </Card>
  );
};

export default TermCard;
