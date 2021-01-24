import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout, isAuthenticated, loading } from '../../actions';

/**
 * Theming
 */
import { useThemeMode } from './../theming/useThemeMode';
import { lightTheme, darkTheme } from '../../styles/Themes.styles';
import ThemeToggler from '../theming/ThemeToggler';

const NavBar = ({ auth: { isAuthenticated, loading }, logout }) => {
    /* Theming  */
    const [theme, themeToggler, mountedComponent] = useThemeMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;
    const authLinks = (
        <li>
            <ul>
                <li>
                    <Link to='/board'>
                        <i className='fas fa-user' />
                        <span className='hide-sm'>Your Kanban Board</span>
                    </Link>
                </li>
                <li>
                    <Link to='/dashboard'>
                        <i className='fas fa-user' />
                        <span className='hide-sm'>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <a onClick={logout} href='#!'>
                        <i className='fas fa-sign-out-alt' />
                        <span className='hide-sm'>Logout</span>
                    </a>
                </li>
            </ul>
        </li>
    );

    const guestLinks = (
        <ul>

            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
            <li>
                <Link to='/profiles'>Info</Link>
            </li>
        </ul>
    );

    return (
        <nav className='navbar bg-dark'>
            <h1>
                <Link to='/'>
                    <i className='fas fa-code'></i> Your Kanban Board
                </Link>
            </h1>
            {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
            <ThemeToggler theme={theme} toggleTheme={themeToggler} />
        </nav>
    );
};

NavBar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logout })(NavBar);
