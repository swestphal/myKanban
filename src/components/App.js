import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

import Board from './Board';
import Dashboard from './Dashboard';

const App = (props) => {
    return (
        <Provider store={store}>
            <Router>
                <Route exact path='/' component={Board} />
                <Route exact path='/dashboard' component={Dashboard} />
            </Router>
        </Provider>
    );
};

export default App;
