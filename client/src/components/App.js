import React, { useEffect } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';


/**
 * Utilities
 */
import Alert from './layout/Alert';
import PrivateRoute from './routing/PrivateRoute';


/**
 * Styles
 */
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './../styles/GlobalStyles'
import { lightMode, darkMode } from '../styles/Themes.styles'

/**
 * Layout
 */
import NavBar from './layout/NavBar';


/**
 * Components
 */
import Board from './Board';

import { Landing } from './layout/Landing';
import Register from './auth/Register';
import Login from './auth/Login';
import ProfileForm from './profile-forms/ProfileForm';
import Dashboard from './dashboard/Dashboard';


/**
 * Authentication
 */
import setAuthToken from '../utils/setAuthToken';
import { loadUser } from '../actions';
if (localStorage.token) {
    setAuthToken(localStorage.token);
}


const App = ({ theme }) => {

    const themeMode = theme === 'darkMode' ? darkMode : lightMode

    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            <Provider store={store} >
                <Router>
                    <NavBar />
                    <Route exact path='/' component={Landing} />
                    <section className='container'>
                        <Alert />
                        <Switch>
                            <Route
                                exact
                                path='/register'
                                component={Register}
                            />
                            <Route exact path='/login' component={Login} />{' '}
                            <PrivateRoute
                                exact
                                path='/create-profile'
                                component={ProfileForm}
                            />
                            <PrivateRoute
                                exact
                                path='/edit-profile'
                                component={ProfileForm}
                            />
                            <PrivateRoute
                                exact
                                path='/dashboard'
                                component={Dashboard}
                            />
                            <PrivateRoute
                                exact
                                path='/board'
                                component={Board}
                            />
                        </Switch>
                    </section>
                </Router>
            </Provider >
        </ThemeProvider>
    );
};

App.propTypes = {
    theme: PropTypes.string.isRequired,
};


const mapStateToProps = (state) => ({
    theme: state.theme
})

export default connect(mapStateToProps)(App);





