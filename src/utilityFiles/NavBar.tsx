// /Users/ingluvious/Development/Github-pd/pandam-website/src/utilityFiles/NavBar.tsx
import { Link } from "react-router-dom";
import styles from "../styleSheets/style_NavBar";
import pandamText from "../images/pandam_logo_white_text_no_bg.png";

const Navbar: React.FC = () => {

  return (
    <nav style={{...styles.navbar, display: "flex", alignItems:"center"}}>
      <div style={{display:"flex", alignItems:"center"}}>
      <Link to="/">
        <img src={pandamText} alt="Pandam Logo White Text Only" style={styles.pandamNavLogo}></img>
      </Link>
      </div>
      <div style={styles.linkContainer}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/services" style={styles.link}>Services</Link>
      <Link to="/about" style={styles.link}>About</Link>
      <Link to="/contact" style={styles.link}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;