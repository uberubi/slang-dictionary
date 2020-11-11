import styled from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";
import { mainOrange, mainBlack } from "../../../globalStyles";


export const Inner = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const Container = styled.div`
  width: 100%;
  position: fixed;
  z-index: 999;
  background-color: ${mainOrange};
  border-bottom: 10px solid ${mainBlack};
`;

export const Title = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-width: 400px;
`;

export const TitleLink = styled(ReactRouterLink)`
  font-family: 'Source Sans Pro';
  font-weight: 900;
  font-style: normal;
  font-size: 52px;
  min-width: 400px;
`;


