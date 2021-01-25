import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

  body {
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    transition: all 0.250s ease-in;
    font-family:'Lato'
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
  
  .colouredBorder[data-colour="0"] {
    border-bottom:3px solid #e78b63; // orange
  }
  .colouredBorder[data-colour="1"] {
    border-bottom:3px solid #ea6b96; // pink
  }
  .colouredBorder[data-colour="2"] {
    border-bottom:3px solid #6ab47d; // green
  }
  .colouredBorder[data-colour="3"] {
    border-bottom:3px solid #5e4cd0; // lila
  }
  .colouredBorder[data-colour="4"] {
    border-bottom:3px solid #87d3f2; // turquiose
  }

`