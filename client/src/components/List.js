import React from 'react';
import AddCard from './AddCard';
import Card from './Card';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import SingleList from '../styles/List.styles'


const List = ({ list_title, order, cards, listID, index }) => {
    console.log(order)
    return (
        <Draggable draggableId={String(listID)} index={index} >
            {(provided) => (
                <div

                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <SingleList>
                        <Droppable droppableId={String(listID)} type='card'>
                            {(provided) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                    <h3 className="colouredBorder" data-colour={parseInt(index) % 5}>{list_title} - {listID}</h3>
                                    {cards && cards.map((card, index) => (
                                        <Card
                                            listID={listID}
                                            id={card.id}
                                            key={card.id}
                                            index={index}
                                            text={card.text}
                                            title={card.title}

                                        />
                                    ))}

                                    {provided.placeholder}
                                    <AddCard listID={listID} />
                                </div>
                            )}
                        </Droppable>
                    </SingleList>
                </div>
            )
            }
        </Draggable >
    );
};

export default List;
