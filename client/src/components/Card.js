import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const styles = {
    card: {
        background: 'white',
        borderRadius: '3px',
        padding: '5px 10px',
        margin: '10px 0',
        boxShadow: '0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)'
    },
    heading: {
        textTransform: 'initial',
    },
};

const Card = ({ title, text, id, index }) => {
    return (
        <Draggable draggableId={String(id)} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <div style={styles.card}>
                        <h3 style={styles.heading}>{title}</h3>
                        <p>{text}</p>
                    </div>
                </div>
            )}
        </Draggable>
    );
};

export default Card;
