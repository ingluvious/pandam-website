import React from 'react';
import {Routes, Route} from "react-router-dom";
import NavBar from "./utilityFiles/NavBar"
import Home from "./webPages/Home";
import Services from "./webPages/Services";
import About from "./webPages/About";
import Contact from "./webPages/Contact";
import Footer from "./utilityFiles/Footer"

// Import the Style Sheet for App.tsx
import './App.css';

const App: React.FC = () => {
  return (
    <>
    <main>
      <div className = "App">
      <NavBar />
        <div className = "container">
        <Routes>
          <Route path = "/" element = {<Home />} />
          {/* <Route path = "/about" element = {<About />} /> */}
          <Route path = "/contact" element = {<Contact />} />
        </Routes>
        <Footer />
        </div>
      </div>
    </main>
    </>
  );
};

export default App;
