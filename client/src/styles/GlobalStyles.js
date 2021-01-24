import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    transition: all 0.250s ease-in;
  }
  a {
      text-decoration:none;
      color:inherit
  }
  h1,h2,h3,h4,h5 {
      color:${({ theme }) => theme.textEm};
  }
  `