import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout, isAuthenticated, loading } from '../../actions';
import ThemeToggler from '../theming/ThemeToggler'
import NavBarStyled from '../../styles/layout/NavBar.styles'

const NavBar = ({ auth: { isAuthenticated, loading }, logout }) => {

    const authLinks = (

        <>
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
        </>
    );

    const guestLinks = (
        <>
            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
            <li>
                <Link to='/profiles'>Info</Link>
            </li>
        </>
    );

    return (
        <>
            <NavBarStyled>
                <div>
                    <h1>
                        <Link to='/'>
                            <i className='fas fa-code'></i> Your Kanban Board
                    </Link>
                    </h1>
                </div>
                <div>
                    <ul>
                        {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
                        <li><ThemeToggler /></li>
                    </ul>

                </div>

            </NavBarStyled>

        </>
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
