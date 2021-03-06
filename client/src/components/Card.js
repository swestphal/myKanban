import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import SingleCard from '../styles/Card.styles'


const Card = ({ title, text, id, index, listID }) => {

    return (
        <Draggable draggableId={String(id)} index={index}>
            {(provided) => (
                <SingleCard
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <div className="SingleCard__inner">
                        <h3 >position: {index} on list: {listID} with id: {id} {title}</h3>
                        <p>{text}</p>
                    </div>

                </SingleCard>
            )}

        </Draggable>
    );
};

export default Card;
