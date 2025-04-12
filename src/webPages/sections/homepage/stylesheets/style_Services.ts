import { hover } from "framer-motion";

const styles: Record<string, React.CSSProperties> = {
  servicesContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: "0px",
    backgroundColor: "transparent"
  },
  sectionHeading: {
    textAlign: "center",
    paddingTop: "25px",
    paddingBottom: "20px"
  },
  innerBox: {
    // Each box takes 30% of the big box width
    width: "28%", 
    height: "450px", 
    // background: "linear-gradient(to bottom, #471111, #FCE5E5)",
    background: "#f5f5f5",
    // background: "linear-gradient(to bottom, #471111, #000000)",
    // background: "#919294",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "25px",
    minWidth: "350px",
    maxWidth: "350px",
    flexShrink: 0, 
    flexGrow: 0,
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.8)"
  },
  innberBox_Columns: {
    flexDirection: "column",
  },
  innerBox_Heading: {
    color: "black",
    marginBottom: "-1rem"
  },
  innerBox_Text: {
    textAlign: "left",
    color: "black"
  },
  innberBox_Text_Alignment: {
    margin: "20px",
    lineHeight: "1.4"
  },
  image_Sizes: {
    height: "75px"
  },
  image_placement: {
    alignItems: "center"
  },
  button_Alignment: {
    textAlign: "center",
    marginTop: "20px"
  },
  imageCircleBackground: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10px",
    marginBottom: "10px"
  },
  imageAndHeadingContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px"
  },
  button_Customise:{
    padding: "10px 20px", 
    fontSize: "16px", 
    borderRadius: "5px", 
    backgroundColor: "#5C0203", 
    color: "#fff", 
    border: "none", 
    cursor: "pointer" 
  },
  submitButton: {
    padding: "1rem 2rem",
    backgroundColor: "maroon",
    color: "white",
    fontWeight: "bold",
    border: "none",
    borderRadius: "50px",
    fontSize: "0.9rem",
    letterSpacing: "1px",
    cursor: "pointer",
    transition: "opacity 0.3s ease"
  },
  submitButton_Hover: {
    opacity: 0.8
  }
};

export default styles;