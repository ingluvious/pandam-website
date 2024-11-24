// Import code specific modules
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Toolbar from './components/Toolbar';

// Import the specific pages to be used within the app
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

const App: React.FC = () => {
    return (
        <div className = "App">
            <Routes>
                <Route path = "/" element = {<Home />}></Route>
            </Routes>
            {/* <Toolbar />
            
              <Route path="/" element={<Home />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes> */}
        </div>
    );
};

export default App;