import styled, { css } from "styled-components";
import { mainGrey, mainOrange, mainBlack } from "../../../globalStyles";

const Inputs = css`
  padding-top: 10px;
  border: 1px solid ${mainBlack};
  background-color: ${mainGrey};
  ::placeholder {
    font-family: "Lora";
    font-weight: 900;
    color: grey;
    font-size: 24px;
  }
`;

export const Container = styled.div`
  margin: 0 20%;
  padding: 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 20px;
  }
`;

export const InputTitle = styled.input`
  ${Inputs}
`;

export const InputText = styled.input`
  ${Inputs}
  height: 400px;
  text-align: center;
`;

export const Button = styled.button``;
