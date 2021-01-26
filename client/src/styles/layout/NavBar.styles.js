import styled from "styled-components"

const NavBarStyled = styled.div`
 
    
    color: ${({ theme }) => theme.textEm};
    display:flex;
    justify-content:space-between;

    ul {
      list-style-type:none;
      display:flex;
      align-items:center;
      li{  
        margin:0 1em;
          a{
            padding:0 1em;
          }
       
      }
    }
  
  `


export default NavBarStyled

