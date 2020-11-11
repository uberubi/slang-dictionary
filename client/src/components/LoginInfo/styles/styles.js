import styled from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";

export const LoginInfo = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 200px;
`;

export const LoginInfoLink = styled(ReactRouterLink)`
  font-weight: bold;
  font-family: "Lora";
  &:nth-child(1) {
    margin-right: 10px;
  }
`;

export const UserLink = styled(ReactRouterLink)`
  font-family: "Lora";
  margin-right: 10px;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
`;

export const Logout = styled.p`
  font-family: "Lora";
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`;
