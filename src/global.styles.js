import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 20px;

  @media screen and (max-width: 800px) {
    padding: 10px;
  }
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

a {
  text-decoration: none;
  color: white;
}

* {
  box-sizing: border-box;
}



`;
