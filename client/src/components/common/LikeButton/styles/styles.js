import styled from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";


export const Container = styled.div`

`

export const Count = styled.div`
`

export const Button = styled.button`
  background-color: ${(props) => props.color};
  color: white;
  cursor: pointer;
`;

export const Link = styled(ReactRouterLink)`
  text-decoration: none;
  color: white;
`;
