import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styles from "../styleSheets/style_NavBar";
import pandamText from "../images/pandam_logo_white_text_no_bg.png";

const Navbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call it initially to set the correct state

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav style={styles.nav}>
      <div style={{display:"flex", alignItems:"center"}}>
      <Link to="/">
        <img src={pandamText} alt="Pandam Logo White Text Only" style={styles.pandamNavLogo}></img>
      </Link>
      {isMobile && (
        <div>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{...styles.hamburger, marginLeft: "auto"}}>
            ☰
          </button>
          {menuOpen && (
            <div style={{...styles.dropdown, display: "flex", right: "10px", left: "auto", transform: "none"}}>
              <Link to="/" style={styles.link}>Home</Link>
              {/* <Link to="/services" style={styles.link}>Services</Link> */}
              {/* <Link to="/about" style={styles.link}>About</Link> */}
              <Link to="/contact" style={styles.link}>Contact</Link>
            </div>
          )}
        </div>
      )}
      </div>
      {!isMobile && (
        <div style={styles.linkContainer}>
          <Link to="/" style={styles.link}>Home</Link>
          {/* <Link to="/services" style={styles.link}>Services</Link> */}
          {/* <Link to="/about" style={styles.link}>About</Link> */}
          <Link to="/contact" style={styles.link}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;