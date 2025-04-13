import React from 'react';
import {Routes, Route} from "react-router-dom";
import NavBar from "./page_sections/navigation/NavBar"
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./page_sections/utilityFiles/Footer";

// Import the Style Sheet for App.tsx
import styles from "./styleSheets/app.module.scss";

const App: React.FC = () => {
  return (
    <>
    <main>
      <div className = {styles.App}>
      <NavBar />
        <div className = {styles.container}>
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
