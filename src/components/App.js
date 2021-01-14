import React, { Component } from 'react';
import List from './List';
import { connect } from 'react-redux';
import AddButton from './AddButton';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { sort } from '../actions';
const styles = {
    board: {
        display: 'flex',
    },
};
class App extends Component {
    onDragEnd = (result) => {
        const { destination, source, draggableId, type } = result;
        if (!destination) {
            return;
        }

        this.props.dispatch(
            sort(
                source.droppableId,
                destination.droppableId,
                source.index,
                destination.index,
                draggableId,
                type
            )
        );
    };
    render() {
        const { lists } = this.props;
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className='App'>
                    <header className='App-header'>Your boards</header>
                    <Droppable
                        droppableId='droppable'
                        direction='horizontal'
                        type='list'
                    >
                        {(provided) => (
                            <div
                                style={styles.board}
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {lists.map((list, index) => (
                                    <List
                                        listID={list.id}
                                        key={list.id}
                                        title={list.title}
                                        cards={list.cards}
                                        index={index}
                                    />
                                ))}
                                {provided.placeholder}
                                <AddButton list />
                            </div>
                        )}
                    </Droppable>
                </div>
            </DragDropContext>
        );
    }
}

const mapStateToProps = (state) => ({
    lists: state.lists,
});

export default connect(mapStateToProps)(App);
