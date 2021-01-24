import styled from "styled-components"

const Nav = styled.nav`
 
    background: ${({ theme }) => theme.heading};
    color: ${({ theme }) => theme.text};
    transition: all 0.250s ease-in;
 
  `


export default Nav