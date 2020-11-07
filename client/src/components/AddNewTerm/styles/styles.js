import styled from "styled-components";
import { mainBlack, mainOrange } from "../../../globalStyles";

export const Wrapper = styled.div`
  position: sticky;
  top: 120px;
  margin: 200px 20px;
  height: 200px;
  width: 400px;
  background-color: ${mainOrange};
  text-align: center;
  font-weight: 700;
  padding: 10px;
  border: 1px solid ${mainBlack};
  border-radius: 4px;
  a {
    font-size: 50px;
    cursor: pointer;
    color: #101820ff;
    text-decoration: none;
  }
`;
