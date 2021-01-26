import styled from "styled-components"

const LogReg = styled.div`
 
    background: ${({ theme }) => theme.bgAccent};
    color: ${({ theme }) => theme.text};

    
    div.section__img {
        flex:50%;
    }

    div.section__auth {
        flex:50%;
    }
    
  `


export default LogReg

