import React from "react";
import { Link } from "react-router-dom";
import styles from "./style_Services";
import SalesforceImage from "../../images/Salesforce Logo.jpg"
import IntegrationImage from "../../images/Integration Logo.png"

const sec_Services: React.FC = () => {
  return (
    <>
      <div style={styles.section_gap}>
        <h1 style={styles.heading}>What can we do to help?</h1>
      </div>
      <div style={styles.servicesContainer}>
        {/* First Service Section */}
        <div style={{ 
          ...styles.innerBox, 
          flex: "0 0 350px", 
          maxWidth: "350px", 
          minWidth: "350px" 
        }}>
          <img src={IntegrationImage} alt="Integration Logo" style={{ height: "100px" }} />
          <h3 className="inner-box-text" style={{ color: "black", padding: "0 20px", width: "100%", textAlign: "center" }}>Data and Integration</h3>
          <p className="inner-box-text" style={{ color: "black", padding: "0 20px", width: "100%" }}>
            We help you connect your systems, integrate APIs, and move data smoothly between platforms like Salesforce and AWS.
          </p>
        </div>

        {/* Second Service Section */}
        <div style={{ 
          ...styles.innerBox, 
          flex: "0 0 350px", 
          maxWidth: "350px", 
          minWidth: "350px" 
        }}>
          <img src={SalesforceImage} alt="Salesforce Logo" style={{ height: "100px" }} />
          <h3 className="inner-box-text" style={{ color: "black", padding: "0 20px", width: "100%" , textAlign: "center"}}>Salesforce</h3>
          <p className="inner-box-text" style={{ color: "black", padding: "0 20px", width: "100%" }}>
            As Salesforce experts, we assist with implementation, automation, and customization tailored to your business.
          </p>
        </div>

        {/* Third Service Section */}
        <div style={{ 
          ...styles.innerBox, 
          flex: "0 0 350px", 
          maxWidth: "350px", 
          minWidth: "350px" 
        }}>
          <h3 className="inner-box-text" style={{ color: "black", padding: "0 20px", width: "100%", textAlign: "center" }}>Workflow Solutions</h3>
          <p className="inner-box-text" style={{ color: "black", padding: "0 20px", width: "100%" }}>
            We design streamlined workflows and user-friendly tools that empower teams to be productive and efficient.
          </p>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link to="/services">
          <button style={{ padding: "10px 20px", fontSize: "16px", borderRadius: "5px", backgroundColor: "#5C0203", color: "#fff", border: "none", cursor: "pointer" }}>
            View All Services
          </button>
        </Link>
      </div>
    </>
  );
};

export default sec_Services;