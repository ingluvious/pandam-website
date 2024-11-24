import React from 'react';
import './Toolbar.css';
import './Toolbar.css';

const Toolbar: React.FC = () => {
    return (
        <nav className = "toolbar">
            <div className = "logo">Pandam</div>
            <ul className = "toolbar-links">
                <li><a href = "#home">Home</a></li>
                <li><a href = "#services">Services</a></li>
                <li><a href = "#about">About</a></li>
                <li><a href = "#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Toolbar;