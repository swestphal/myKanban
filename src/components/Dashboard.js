import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    return (
        <nav className='navbar bg-dark'>
            <h1>
                <Link to='/'>
                    <i className='fas fa-code'></i> Your board
                </Link>
            </h1>
        </nav>
    );
}
