import React from "react";
import { Link } from "react-router-dom";
import service_style from "../../styleSheets/style_service.module.scss"
import ServiceCard from "../serviceCards/service_cards";
import Button from "../utilityFiles/GlobalButton";

import IntegrationImage from "../../images/web_int_web_02.png"
import CloudPlatfrom from "../../images/web_cloud_01.png"
import DatabaseImage from "../../images/Web_data_05.png"


const Sec_Services: React.FC = () => {
  return (
    <>
    {/* Title of the page */}
      <div>
        <h1 className={service_style.sectionHeading}>Our Services</h1>
      </div>

      <div className={service_style.servicesContainer}>
        {/* First Service Card */}
        <ServiceCard
          imageSrc={IntegrationImage}
          altText="Integration Logo"
          title="Integration"
          description="We specialize in system integrations, API development, ETL pipelines, 
                    and migration services—connecting your platforms for seamless data flow. Whether you’re linking 
                    Salesforce with internal tools or moving legacy data into a modern cloud environment, 
                    we ensure all your systems work together efficiently and reliably"
          />

        {/* Second Service Card */}
        <ServiceCard
          imageSrc={CloudPlatfrom}
          altText="Cloud Platform Logo"
          title="Cloud Platforms"
          description="Pandam specializes in the Salesforce cloud platform, offering expert implementation, 
                    ongoing support, security reviews, and tailored training. We help you align 
                    Salesforce with your business goals, ensuring optimized performance and a strong return on investment"
          />
        
        {/* Third Service Card */}
        <ServiceCard
          imageSrc={DatabaseImage}
          altText="Database Logo"
          title="Data"
          description="We deliver end-to-end data services—from audits and access policies to cleanup, 
                    enrichment, and validation. Our team ensures your data is accurate, secure, 
                    and seamlessly integrated across platforms like Salesforce and AWS"
          />

      </div>
      <div className={service_style.button_Alignment}>
        <Link to="/services">
        <Button text="View All Services" />
        </Link>
      </div>
    </>
  );
};

export default Sec_Services;