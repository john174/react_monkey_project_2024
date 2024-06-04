import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Employee Search</h1>
            <nav>
                <Link to="/">Home</Link> | <Link to="/favorites">Favorites</Link>
            </nav>
        </header>
    );
};

export default Header;
