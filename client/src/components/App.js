import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import { GlobalStyles } from './../styles/GlobalStyles'
/**
 * Theming
 */
import { useThemeMode } from './theming/useThemeMode';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/Themes.styles';
import ThemeToggler from './theming/ThemeToggler';

import Board from './Board';
import NavBar from './layout/NavBar';
import { Landing } from './layout/Landing';
import Register from './auth/Register';
import Login from './auth/Login';
import ProfileForm from './profile-forms/ProfileForm';
import Dashboard from './dashboard/Dashboard';
import PrivateRoute from './routing/PrivateRoute';
import Alert from './layout/Alert';
import setAuthToken from '../utils/setAuthToken';

import { loadUser } from '../actions';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}
const App = (props) => {

    /* Theming  */
    const [theme, themeToggler, mountedComponent] = useThemeMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    useEffect(() => {
        store.dispatch(loadUser());
    }, []);
    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            <ThemeToggler theme={theme} toggleTheme={themeToggler} />
            <Provider store={store}>
                <Router>
                    <>
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
                    </>
                </Router>

            </Provider>
        </ThemeProvider >
    );
};

export default App;
