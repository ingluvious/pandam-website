// Import code specific modules
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import Toolbar from './components/Toolbar';

// Import the specific pages to be used within the app
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

const App: React.FC = () => {
    const backgroundStyle = {
        background: 'linear-gradient(to bottom right, #fdd5b1, #f4a261, #e76f51)',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        margin: 0,
    };

    return (
        <div className = "App" style = {backgroundStyle}>
            <Toolbar />
            <Routes>
            <Route path="/" element={<Navigate to="/Home" />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            </Routes>
        </div>
        
    );
};

export default App;