import styled from "styled-components"

const CardForm = styled.div`
 

    color: ${({ theme }) => theme.text};
    border-radius: 3px;
   
    margin: 10px 0;
    
   
    
    .Card__input{
      margin-top  2em;
      padding:0 1em 1em;
      border-radius:5px;
      box-sizing:border-box;
      border: 1px dashed ${({ theme }) => theme.btn1};
      box-shadow: ${({ theme }) => theme.shadow}
    }

    .Card__addButton,
    .Card__closeButton {
      text-align:right;
      padding-right: 1em;
      color:${({ theme }) => theme.btn1}
    }
    input[type="text"],textarea {
    
        resize: none;
        outline: none;
        padding: 5px;
        box-sizing:border-box;
        width:100%;
    }
  `


export default CardForm

