import styled, { createGlobalStyle } from "styled-components";

export const mainOrange = "#f2aa4cff";
export const mainBlack = "#101820ff";
export const mainGrey = "#d9dad9";

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin: 150px 20%;
`;

export const GlobalStyles = createGlobalStyle`

  html, body {
    font-family: 'Sourse Sans Pro', Helvetica, Arial, Helvetica, sans-serif, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
    margin: 0;
    padding: 0;
    font-size: 16px;
    color: ${mainBlack};
    background-color: rgb(216, 218, 202);
  }

  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px #f9f9f9;
    -webkit-box-shadow: inset 0 0 6px #f9f9f9;
    background-color: #F5F5F5;
  }

  body::-webkit-scrollbar {
    width: 4px;
    background-color: #F5F5F5;
  }

  body::-webkit-scrollbar-thumb {
    background-color: white;
    border: 2px solid #101820ff;
  }

  @font-face {
    font-family: 'Lora';
    src: url('../src/fonts/Lora-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Lora';
    src: url('../src/fonts/Lora-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Lora';
    src: url('../src/fonts/Lora-BoldItalic.ttf') format('truetype');
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: 'Lora';
    src: url('../src/fonts/Lora-MediumItalic.ttf') format('truetype');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'Source Sans Pro';
    src: url('../src/fonts/SourceSansPro-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Source Sans Pro';
    src: url('../src/fonts/SourceSansPro-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Source Sans Pro';
    src: url('../src/fonts/SourceSansPro-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Source Sans Pro';
    src: url('../src/fonts/SourceSansPro-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
  }
`;
