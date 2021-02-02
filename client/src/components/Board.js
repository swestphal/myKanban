import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import List from './List';
import AddList from './AddList';
import { sort } from '../actions';
import NavBar from './../components/layout/NavBar'

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
            <NavBar />
            <DragDropContext onDragEnd={onDragEnd}>


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
                            {lists.map((list, index) => {
                                console.log(list);
                                return (

                                    < List
                                        listID={list.id}
                                        key={list.id}
                                        list_title={list.list_title}
                                        cards={list.cards}
                                        index={index}
                                    />
                                )
                            })}
                            {provided.placeholder}
                            <AddList list />
                        </div>
                    )}
                </Droppable>

            </DragDropContext>
        </div>
    );
};

const mapStateToProps = (state) => ({
    lists: state.lists,
});

export default connect(mapStateToProps)(Board);
