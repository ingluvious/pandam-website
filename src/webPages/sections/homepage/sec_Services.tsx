import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./stylesheets/style_Services"
import ServiceCard from "./serviceCards/serviceCards"
import IntegrationImage from "../../../images/Integration Logo.png"
import CloudPlatfrom from "../../../images/Cloud Platform.png"
import DatabaseImage from "../../../images/Database Image.avif"


const Sec_Services: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <>
    {/* Title of the page */}
      <div>
        <h1 style={{...styles.sectionHeading}}>Our Services</h1>
      </div>

      <div style={styles.servicesContainer}>
        {/* First Service Card */}
        <ServiceCard
          imageSrc={IntegrationImage}
          altText="Integration Logo"
          title="Integration"
          description="We specialize in system integrations, API development, ETL pipelines, 
                    and migration services—connecting your platforms for seamless data flow. Whether you’re linking 
                    Salesforce with internal tools or moving legacy data into a modern cloud environment, 
                    we ensure all your systems work together efficiently and reliably"
          backgroundColour="#e87720"
          />

        {/* Second Service Card */}
        <ServiceCard
          imageSrc={CloudPlatfrom}
          altText="Cloud Platform Logo"
          title="Salesforce"
          description="Pandam specializes in the Salesforce platform—offering expert implementation, 
                    ongoing support, security reviews, and tailored training. We help you align 
                    Salesforce with your business goals, ensuring optimized performance and a strong return on investment"
          backgroundColour="#34dcfa"
          />
        
        {/* Third Service Card */}
        <ServiceCard
          imageSrc={DatabaseImage}
          altText="Database Logo"
          title="Data"
          description="We deliver end-to-end data services—from audits and access policies to cleanup, 
                    enrichment, and validation. Our team ensures your data is accurate, secure, 
                    and seamlessly integrated across platforms like Salesforce and AWS"
          backgroundColour="#24c221"
          />

      </div>
      <div style={{...styles.button_Alignment}}>
        <Link to="/services">
          <button style={{
            ...styles.submitButton,
            ...(isHovered ? styles.submitButton_Hover : {})
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
            View All Services
          </button>
        </Link>
      </div>
    </>
  );
};

export default Sec_Services;