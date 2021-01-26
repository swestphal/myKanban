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

  /* Change Autocomplete styles in Chrome*/
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  border: 1px solid inherit;
  -webkit-text-fill-color: ${({ theme }) => theme.textEm};
  -webkit-box-shadow: ${({ theme }) => theme.formPlaceholder};
  transition: background-color 5000s ease-in-out 0s;

}
::-webkit-input-placeholder { color: ${({ theme }) => theme.text}; }
::-moz-placeholder { color: ${({ theme }) => theme.text}; font-weight:300; }

input{
  border-radius: 3px;
  padding: 5px 10px;
  margin: 10px 0;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.bgAccent};
  border: none;
  outline: none;
  padding: 10px;
  font-size: 13px;
  color:  ${({ theme }) => theme.textEm};
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  box-shadow:  ${({ theme }) => theme.form};
  transition: box-shadow 0.5s ease;
}
input[type="submit"]{
  cursor:pointer;
  background:${({ theme }) => theme.buttonBg};
  color:${({ theme }) => theme.buttonText};
  &:hover {

  }
}

`