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
    backgroundColor: "#fff",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "25px",
    minWidth: "350px",
    maxWidth: "350px",
    flexShrink: 0, 
    flexGrow: 0
  },
  innerBox_Heading: {
    alignItems: "center",
    color: "black",
  },
  innerBox_Text: {
    textAlign: "left",
    color: "black"
  },
  innberBox_Text_Alignment: {
    margin: "20px"
  },
  image_Sizes: {
    height: "75px"
  },
  button_Alignment: {
    textAlign: "center",
    marginTop: "20px"
  },
  button_Customise:{
    padding: "10px 20px", 
    fontSize: "16px", 
    borderRadius: "5px", 
    backgroundColor: "#5C0203", 
    color: "#fff", 
    border: "none", 
    cursor: "pointer" 
  }
};

export default styles;