import React from "react";
// import styles from "../sections/homepage/stylesheets/style_Services";
import styles from "../stylesheets/style_Services"

interface ServiceCardProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  backgroundColour?: string;
}

// const buildGradientBackground = (color: string) => 
// //   `linear-gradient(to bottom, ${color} 30%, #ffffff 100%)`;
// `linear-gradient(to bottom, ${color} 30%, #ffffff 100%)`

const ServiceCard: React.FC<ServiceCardProps> = ({ imageSrc, altText, title, description }) => {
  return (
    <div style={{ ...styles.innerBox }}>
      <div style={{ 
        ...styles.imageAndHeadingContainer
      }}>
        <div style={{ ...styles.imageCircleBackground }}>
          <img src={imageSrc} alt={altText} style={{...styles.image_Sizes }} />
        </div>
        <div style={{ ...styles.innerBox_Heading }}>
          <h4>{title}</h4>
        </div>
      </div>
      <div style={{...styles.innerBox_Text }}>
        <p style={{ ...styles.innberBox_Text_Alignment }}>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;