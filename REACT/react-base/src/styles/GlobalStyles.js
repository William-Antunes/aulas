import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
  body{
    font-family:sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  button{
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  
`;
