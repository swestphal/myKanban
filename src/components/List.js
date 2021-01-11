import React from 'react';
import AddButton from './AddButton';
import Card from './Card';

const styles = {
    list: {
        background: '#e2caff',
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

const List = ({ title, cards, listID }) => {
    return (
        <div style={styles.list}>
            <h2 style={styles.heading}>{title}</h2>
            {cards.map((card) => (
                <Card key={card.id} text={card.text} title={card.title} />
            ))}
            <AddButton listID={listID} />
        </div>
    );
};

export default List;
