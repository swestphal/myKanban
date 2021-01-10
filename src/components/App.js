import React, { Component } from 'react';
import List from './List';
import { connect } from 'react-redux';

const styles = {
    board: {
        display: 'flex',
    },
};
class App extends Component {
    render() {
        const { lists } = this.props;
        return (
            <div className='App'>
                <header className='App-header'>Your first board</header>
                <div style={styles.board}>
                    {lists.map((list) => (
                        <List title={list.title} cards={list.cards} />
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    lists: state.lists,
});

export default connect(mapStateToProps)(App);
