import styled from "styled-components"

const ThemeButton = styled.button`
  background: ${({ theme }) => theme.bg};
  border: 2px solid ${({ theme }) => theme.accent};

  border-radius:1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  position: absolute;
  top 1rem;
  right: 1rem;
  width: 4rem;
  height: 2rem;
  outline: none;
  align-items: center;
  svg {
    color:#e88d65;
    height: auto;
    transition: all 0.5s ease-in;
    &:nth-child(2) {
      color: #5966f1;
    }
  }
`;

export default ThemeButton