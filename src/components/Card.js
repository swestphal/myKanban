import React from 'react';

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

const Card = ({ title, text }) => {
    return (
        <div style={styles.card}>
            <h3 style={styles.heading}>{title}</h3>
            <p>{text}</p>
        </div>
    );
};

export default Card;
