import React from 'react';
import { func, string } from 'prop-types';

import { Moon as MoonIcon, Sun as SunIcon } from "react-feather";
import { connect } from 'react-redux';
import { toggleTheme } from '../../actions'
import PropTypes from 'prop-types';

import ThemeButton from '../../styles/ThemeToggler.styles'

//TODO set theme state to local storage in order to remember for returning users   



const Toggle = ({ theme, toggleTheme }) => {

  const light = theme === 'lightMode';
  return (
    <ThemeButton onClick={() => toggleTheme()} >
      <SunIcon
        style={{ transform: light ? 'translateY(0)' : 'translateY(2rem)' }}
      />
      <MoonIcon
        style={{ transform: light ? 'translateY(2rem)' : 'translateY(0)' }}
      />
    </ThemeButton >
  );
};

Toggle.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  theme: state.theme
})

export default connect(mapStateToProps, { toggleTheme })(Toggle);

