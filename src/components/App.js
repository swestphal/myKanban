import React, { Component } from 'react';
import List from './List';
import { connect } from 'react-redux';
import AddButton from './AddButton';
import { DragDropContext } from 'react-beautiful-dnd';

const styles = {
    board: {
        display: 'flex',
    },
};
class App extends Component {
    onDragEnd = () => {
        //reordering logic
    };
    render() {
        const { lists } = this.props;
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
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
            </DragDropContext>
        );
    }
}

const mapStateToProps = (state) => ({
    lists: state.lists,
});

export default connect(mapStateToProps)(App);
