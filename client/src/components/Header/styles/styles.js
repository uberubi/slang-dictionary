import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: #f2aa4cff;
  height: 10vh;
  overflow: hidden;
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
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`;