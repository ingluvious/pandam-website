import React from 'react';
import { Link } from 'react-router-dom';
import './Toolbar.css';

const Toolbar: React.FC = () => {
    return (
        <nav className="toolbar">
            <ul className="toolbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Services">Services</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Toolbar;