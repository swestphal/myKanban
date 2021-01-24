import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';
import { Moon as MoonIcon, Sun as SunIcon } from "react-feather";
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

const Toggle = ({ theme, toggleTheme }) => {
  const light = theme === 'light';
  return (
    <ThemeButton onClick={toggleTheme}>
      <SunIcon
        style={{ transform: light ? 'translateY(0)' : 'translateY(2rem)' }}
      />
      <MoonIcon
        style={{ transform: light ? 'translateY(2rem)' : 'translateY(0)' }}
      />
    </ThemeButton>
  );
};
/* using propTypes to define the types of the prop:
    theme is the current selected theme
    toggleTheme is the function that is used to switch between the themes
 */
Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
export default Toggle;
