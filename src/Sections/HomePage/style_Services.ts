const styles: Record<string, React.CSSProperties> = {
  section_gap: {
    paddingTop:"25px",
  },
  heading: {
    textAlign: "center",
    paddingBottom: "20px"
  },
  roundedRectangle: {
    width: "95%", // Adjust as needed
    height: "650px", // Adjust as needed
    backgroundColor: "#5C0203", // Light background
    borderRadius: "20px", // Rounded edges
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)", // Optional shadow
    margin: "20px auto", // Centers the rectangle horizontally
    padding: "20px auto",
  },
  innerBox: {
    width: "25%", // Each box takes 30% of the big box width
    height: "450px", // Adjust as needed
    backgroundColor: "#fff", // White box inside
    borderRadius: "10px", // Rounded edges
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.2)", // Subtle shadow
    margin: "60px"
  },
  innerBox_Text: {
    color:"black"
  }
};

export default styles;