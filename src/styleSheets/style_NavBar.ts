const styles: Record<string, React.CSSProperties> = {
    nav: {
        backgroundColor: "#020002",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        borderBottom: "1px solid #ffffff",
        position: "relative",
        zIndex: 1000
    },
    linkContainer: {
        display: "flex",
        gap: "75px",
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        alignItems: "center"
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "18px",
        fontWeight: "600",
        transition: "color 0.3s ease"
    },
    pandamNavLogo: {
        height: "50px",
        paddingLeft: "10px",
        paddingTop: "5px"
    },
    mobileMenu: {
        display: "none"
    },
    hamburgerContainer: {
        display: "flex",
        justifyContent: "flex-end"
    },
    hamburger: {
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        width: "30px",
        height: "30px",
        marginLeft: "100px"
    },
    dropdown: {
        flexDirection: "column",
        position: "relative",
        top: "60px",
        right: "10px",
        left: "auto",
        transform: "none",
        backgroundColor: "#020002",
        border: "1px solid #ffffff",
        zIndex: 1
    }
};

export default styles;