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
      font-weight:700;
      font-family:'Lato'
    
  }
  h3 {
      font-size:20px;
  }
  `