import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import navbar_styles from "../../styleSheets/style_navbar.module.scss";
import pandamText from "../../images/pandam_logo_white_text_no_bg.png";

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
    <nav className={navbar_styles.nav}>
      <div style={{display:"flex", alignItems:"center"}}>
        <Link to="/">
          <img src={pandamText} alt="Pandam Logo White Text Only" className={navbar_styles.pandamNavLogo}></img>
        </Link>
      </div>
      {isMobile && (
        <div className={navbar_styles.burgerWrapper}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`${navbar_styles.hamburger} ${menuOpen ? navbar_styles.open : ''}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          {menuOpen && (
            <div className={`${navbar_styles.dropdown} ${navbar_styles.show}`}>
              <Link to="/" className={navbar_styles.link}>Home</Link>
              {/* <Link to="/services" style={styles.link}>Services</Link> */}
              {/* <Link to="/about" style={styles.link}>About</Link> */}
              <Link to="/contact" className={navbar_styles.link}>Contact</Link>
            </div>
          )}
        </div>
      )}
      {!isMobile && (
        <div className={navbar_styles.linkContainer}>
          <Link to="/" className={navbar_styles.link}>Home</Link>
          {/* <Link to="/services" style={styles.link}>Services</Link> */}
          {/* <Link to="/about" style={styles.link}>About</Link> */}
          <Link to="/contact" className={navbar_styles.link}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;