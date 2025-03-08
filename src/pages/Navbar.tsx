import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Define different sizes for the button
  const sizes = {
    normal: 35  
  };

  const size = sizes.normal; // Adjust size here

  return (
    <nav style={styles.navbar}>
      {/* Animated Burger Icon with Three Bars */}
      <motion.div
        style={{ ...styles.burger, width: `${size}px`, height: `${size}px` }}
        onClick={() => setIsOpen(!isOpen)}
        initial={{ rotate: 0 }}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* Custom Burger with Three Bars */}
        {!isOpen ? (
          <div style={styles.burgerBars}>
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
          </div>
        ) : (
          <div style={{ fontSize: `${size / 2.5}px` }}>✖</div>
        )}
      </motion.div>

      {/* Dropdown Menu */}
      {isOpen && (
        <motion.div
          style={styles.menu}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Link to="/" style={styles.link} onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" style={styles.link} onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" style={styles.link} onClick={() => setIsOpen(false)}>Contact</Link>
        </motion.div>
      )}
    </nav>
  );
};

// Styles (Custom Three-Bar Burger)
const styles: Record<string, React.CSSProperties> = {
  navbar: {
    position: "fixed",
    top: "20px",
    left: "20px",
    zIndex: 1000,
  },
  burger: {
    borderRadius: "50%",
    background: "#fff",
    color: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    userSelect: "none",
    transition: "background 0.5s ease-in-out, color 0.5s ease-in-out",
    border: "1px solid #000",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
    position: "relative",
  },
  burgerBars: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "40%", // Adjust to control bar spacing
    width: "60%",
  },
  bar: {
    width: "65%",
    height: "3px", // Thickness of bars
    background: "#000", // Color of bars
    borderRadius: "2px",
  },
  menu: {
    position: "absolute",
    top: "70px",
    left: "10px",
    background: "#fff",
    padding: "10px",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
  },
  link: {
    color: "#000",
    textDecoration: "none",
    padding: "10px",
    display: "block",
    transition: "background 0.3s ease",
  },
};

export default Navbar;