import { createGlobalStyle } from "styled-components";

const GlobalMainStyle = createGlobalStyle`
  html,
  body,
  button {
    font-family: 'Jura', sans-serif;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1, h2, h3 {
    font-weight: 500;
  }
  h1 {
    font-size: 1.7rem;
  }
  h2 {
    font-size: 3rem;
  }
  h3 {
    font-size: 2rem;
  }

  a {
    color: #0070f3;
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default GlobalMainStyle;
