import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';



import Board from './Board';
import NavBar from './layout/NavBar';
import { Landing } from './layout/Landing';
import Register from './auth/Register';
import Login from './auth/Login';
import CreateProfile from './profile-forms/CreateProfile';
import Dashboard from './dashboard/Dashboard';
import PrivateRoute from './routing/PrivateRoute';
import Alert from './layout/Alert';
import setAuthToken from '../utils/setAuthToken';

import { loadUser } from '../actions';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}
const App = (props) => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);
    return (
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
                                component={CreateProfile}
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
    );
};

export default App;
