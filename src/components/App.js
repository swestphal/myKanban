import React, { Component } from 'react';
import List from './List';
import { connect } from 'react-redux';
import AddButton from './AddButton';

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
                        <List
                            listID={list.id}
                            key={list.id}
                            title={list.title}
                            cards={list.cards}
                        />
                    ))}
                    <AddButton list />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    lists: state.lists,
});

export default connect(mapStateToProps)(App);
