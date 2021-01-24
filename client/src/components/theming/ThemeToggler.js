import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';
import { Moon as MoonIcon, Sun as SunIcon } from "react-feather";
const ThemeButton = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 1.5rem;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  overflow: hidden;
  position: absolute;
  right: 1em;
  width: 6rem;
  height: 3rem;
  outline: none;
  align-items: center;
  svg {
    height: auto;
    width: 2rem;
    transition: all 0.5s ease-in;
    &:nth-child(2) {
      color: black;
    }
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  const light = theme === 'light';
  return (
    <ThemeButton onClick={toggleTheme}>
      <SunIcon
        style={{ transform: light ? 'translateY(0)' : 'translateY(50px)' }}
      />
      <MoonIcon
        style={{ transform: light ? 'translateY(-50px)' : 'translateY(0)' }}
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
