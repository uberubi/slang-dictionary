import styled from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";
import { mainOrange, mainBlack } from "../../../globalStyles";

export const Card = styled.div`
  background-color: ${mainOrange};
  border: 1px solid ${mainBlack};
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
`;

export const TitleLink = styled(ReactRouterLink)`
  font-family: "Lora";
  font-weight: 700;
  font-size: 26px;
  color: ${mainBlack};
  text-decoration: none;

`;
export const UserLink = styled(ReactRouterLink)`
  color: ${mainBlack}
`


export const Text = styled.div`
  padding: 10px;
  font-size: 20px;
  ::first-letter {
    text-transform: uppercase;
  }
`;
export const AuthorInfo = styled.div`
  font-style: italic;
`;

