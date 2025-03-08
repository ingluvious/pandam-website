import React from "react";
import pandamLogo from "../resources/Pandam.png"
const Home: React.FC = () => {
    return (
    <>
    <div style = {styles.container}>
        <img src={pandamLogo} alt = "Pandam Logo" style = {styles.image_size}></img>
        {/* <h1 style = {styles.header}> Pandam </h1> */}
    </div>
    <div style = {{paddingTop: "75px"}}>
    <p style = {styles.paragraph}>Engage with Pandam so that you can unfold your true Potential.</p>
    </div>
    </>
  );
};

const styles: Record<string, React.CSSProperties> = {
    container: {
        display: "flex",
        justifyContent: "center", // Centers horizontally
        alignItems: "center", // Centers vertically
        height: "10vh", // Full height of the screen
        textAlign: "center", // Ensures text is centered
      },
    heading: {
        fontSize: "2rem",
        fontWeight: "bold"
    },
    paragraph: {
        fontSize: "1rem",
        textAlign: "center"
    },
    image_size:{
        display: "flex",
        height: "20vh",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        paddingTop: "75px"
    }
};

export default Home;