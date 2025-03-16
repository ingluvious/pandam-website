import React from 'react';
import {Routes, Route} from "react-router-dom";
import NavBar from "./utilityFiles/NavBar"
import Home from "./webPages/Home";
import Services from "./webPages/Services";
import About from "./webPages/About";
import Contact from "./webPages/Contact";


// Import the Style Sheet for App.tsx
import './App.css';

const App: React.FC = () => {
  return (
    <>
    <div className = "App">
      <NavBar />
      <div>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/contact" element = {<Contact />} />
      </Routes>
      </div>
      </div>
    </>
  );
};

export default App;
