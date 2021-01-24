import styled from "styled-components"

const SingleCard = styled.div`
 
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    border-radius: 3px;
    padding: 5px 10px;
    margin: 10px 0;
    box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);

    >div {
      
    }
  
  `


export default SingleCard

