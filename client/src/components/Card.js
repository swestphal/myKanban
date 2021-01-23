import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const styles = {
    card: {
        background: 'white',
        borderRadius: '5px',
        padding: '5px 10px',
        margin: '10px 0',
    },
    heading: {
        marginTop: '10px',
        fontSize: '16px',
        fontWeight: '100',
        fontFamily: 'Kufam',
        textTransform: 'uppercase',
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
