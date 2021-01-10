import React from 'react';
import Card from './Card';

const styles = {
    list: {
        background: '#bb86fc',
        width: '300px',
        borderRadius: '5px',
        boxShadow: 'rgba(187, 134, 252,.7) 1px 2px 10px',
        padding: '10px',
        boxSizing: 'border-box',
        margin: '10px',
    },
    heading: {
        fontFamily: 'Kufam',
        textTransform: 'uppercase',
    },
};

const List = ({ title, cards }) => {
    return (
        <div style={styles.list}>
            <h2 style={styles.heading}>{title}</h2>
            {cards.map((card) => (
                <Card text={card.text} title={card.title} />
            ))}
        </div>
    );
};

export default List;
