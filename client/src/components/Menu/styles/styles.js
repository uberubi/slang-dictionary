import styled from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";
import { mainBlack } from "../../../globalStyles";

export const Container = styled.div`
min-width: 600px;`;

export const Menu = styled.nav`
  font-family: "Lora";
  font-weight: 600;
  font-size: 22px;
`;

export const Ul = styled.ul`
  list-style-type: none;
`;
export const Li = styled.li`
  display: inline-block;
  margin-right: 20px;
`;

export const MenuLink = styled(ReactRouterLink)`
  text-decoration: none;
  color: ${mainBlack};
`;
