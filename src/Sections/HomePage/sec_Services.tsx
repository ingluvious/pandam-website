import React from "react";
import styles from "./style_Services";
import SalesforceImage from "../../images/Salesforce Logo.jpg"
import IntegrationImage from "../../images/Integration Logo.png"

const sec_Services: React.FC = () => {
  return (
    <>
    <div style={styles.section_gap}>
        <h1 style={styles.heading}>What can we do to help?</h1>
    </div>
    <div style={styles.roundedRectangle}>
        {/* First Box */}
        <div style = {{...styles.innerBox}}>
        <img src = {IntegrationImage} alt = "Integration Logo" style = {{height: "100px"}}></img>
        <p style = {{color: "black"}}> Data and Integration </p>
        </div>
        {/* Second Box */}
        <div style = {styles.innerBox}>
            <img src = {SalesforceImage} alt = "Salesforce Logo" style = {{height: "100px"}}></img>
            <p style = {{color: "black"}}> Salesforce </p>
        </div>
        {/* Third Box */}
        <div style = {styles.innerBox}>
        </div>
    </div>
    </>
  );
};

export default sec_Services;