import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import List from './List';
import AddList from './AddList';
import { sort } from '../actions';
import NavBar from './../components/layout/NavBar'
import { getLists } from './../actions/listsAction'
const styles = {
    board: {
        display: 'flex',
    },
};
const Board = (props) => {

    const [highestList, setHighestList] = useState(10)

    useEffect(() => {
        props.getLists();
        // find highest order number of list
        if (!props.lists.loading) {
            const highest = (props.lists.lists).reduce((highVal, currVal) => {
                if (currVal.order > highVal.order) return currVal;
                else return highVal
            })
            setHighestList(highest.order)

        }
    }, [getLists]);

    const onDragEnd = (result) => {
        const { destination, source, draggableId, type } = result;
        if (!destination) {
            return;
        }

        props.sort(
            source.droppableId,
            destination.droppableId,
            source.index,
            destination.index,
            draggableId,
            type

        );
    };

    return (
        <div>
            {props.lists.loading ? (<p>nix</p>) : (
                <><NavBar />
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
                                    {props.lists.lists.map((list, index) => {

                                        return (

                                            < List
                                                listID={`list-${list._id}`}
                                                key={`list-${list._id}`}
                                                list_title={list.list_title}
                                                cards={list.cards}
                                                index={index}
                                            />
                                        )
                                    })}
                                    {provided.placeholder}
                                    <AddList list order={highestList} />
                                </div>
                            )}
                        </Droppable>

                    </DragDropContext>
                </>)}
        </div>
    );
};

const mapStateToProps = (state) => ({
    lists: state.lists,
});

export default connect(mapStateToProps, { getLists, sort })(Board);
