import styled, { css } from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";
import { mainOrange, mainBlack } from "../../../globalStyles";

const Links = css`
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
  color: ${mainBlack};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${mainOrange};
  border-bottom: 10px solid ${mainBlack};
  height: 80px;
  min-height: 60px;
  width: 100%;
  &.sticky {
    position: fixed;
    top: 0;
    width: 100%;
  }

  &.sticky + .content {
    padding-top: 60px;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-width: 400px;
`;

export const TitleLink = styled(ReactRouterLink)`
  ${Links}
  font-family: 'Source Sans Pro';
  font-weight: 900;
  font-style: normal;
  font-size: 50px;
`;

export const LoginInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 200px;
`;

export const LoginInfoLink = styled(ReactRouterLink)`
  ${Links}
  &:nth-child(1) {
    margin-right: 10px;
  }
`;

export const User = styled.p`
  margin-right: 10px;
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
`;
