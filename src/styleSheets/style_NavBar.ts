const styles: Record<string, React.CSSProperties> = {
    nav: {
        backgroundColor: "transparent",
        display: "flex",    
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 20px"
    },
    linkContainer: {
      display: "flex",
      gap: "15px",
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)"
    },
    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "20px",
      height: "50%"
    },
    pandamNavLogo:{
        height: "45px",
        paddingLeft: "15px",
        paddingTop: "5px"
    }
  };

  export default styles;