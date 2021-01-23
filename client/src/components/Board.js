import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import List from './List';
import AddButton from './AddButton';
import { sort } from '../actions';

const styles = {
    board: {
        display: 'flex',
    },
};
const Board = (props) => {
    const onDragEnd = (result) => {
        const { destination, source, draggableId, type } = result;
        if (!destination) {
            return;
        }

        props.dispatch(
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

    const { lists } = props;

    return (
        <div>
            <nav className='navbar bg-dark'>
                <h1>
                    <Link to='/dashboard'>
                        <i className='fas fa-code'></i> Your dashboard
                    </Link>
                </h1>
            </nav>
            <DragDropContext onDragEnd={onDragEnd}>
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
        </div>
    );
};

const mapStateToProps = (state) => ({
    lists: state.lists,
});

export default connect(mapStateToProps)(Board);
