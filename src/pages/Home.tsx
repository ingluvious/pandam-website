import React from "react";

const Home: React.FC = () => {
  return (
    <>
    <div style = {styles.container}>
      <h1 style = {styles.header}> Pandam </h1>
    </div>
    <p style = {styles.paragraph}>Engage with Pandam so that you can unfold your true Potential.</p>
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
    }
};

export default Home;