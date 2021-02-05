import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height:100%;
  }

  body{
    -webkit-font-smoothing: antialiased !important;
    transition: background-color 300ms;
    background-color: #cc393b;
  }


  body, input, button {
    font-size: 14px;
    font-family: 'Roboto', Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
    border: 0;

  }

  svg {
    cursor: pointer
  }

  ul {
    list-style:none;
  }

  li {
    list-style-type: none;
    font-family: 'Roboto', Helvetica, Arial;
    font-size: 30px;
  }

  a {
    text-decoration:none;
  }

  @keyframes loadAnimation {
    0% {
      opacity: 0;
    }

    100% {
      opacity:1
    }
  }
`;
