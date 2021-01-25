import styled from "styled-components"

const SingleCard = styled.div`
 
    background: ${({ theme }) => theme.bgAccent};
    color: ${({ theme }) => theme.text};
    border-radius: 3px;
    padding: 5px 10px;
    margin: 10px 0;
    box-shadow: ${({ theme }) => theme.shadow}

    >div {
      
    }
  
  `


export default SingleCard

