import React from 'react';
import AddButton from './AddButton';
import Card from './Card';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import SingleList from '../styles/List.styles'


const List = ({ title, cards, listID, index }) => {
    return (
        <Draggable draggableId={String(listID)} index={index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                >
                    <SingleList>
                        <Droppable droppableId={String(listID)} type='card'>
                            {(provided) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                    <h3>{title}</h3>
                                    {cards.map((card, index) => (
                                        <Card
                                            id={card.id}
                                            key={card.id}
                                            index={index}
                                            text={card.text}
                                            title={card.title}
                                        />
                                    ))}

                                    {provided.placeholder}
                                    <AddButton listID={listID} />
                                </div>
                            )}
                        </Droppable>
                    </SingleList>
                </div>
            )}
        </Draggable>
    );
};

export default List;
