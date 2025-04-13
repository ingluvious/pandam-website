import React from "react";
import service_style from "../../../../styleSheets/style_serviceCard.module.scss";

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
    <div className={service_style.innerBox }>
      <div className={
        service_style.imageAndHeadingContainer
      }>
        <div className={ service_style.imageCircleBackground }>
          <img src={imageSrc} alt={altText} className={service_style.image_Sizes } />
        </div>
        <div className={service_style.innerBox_Heading }>
          <h4>{title}</h4>
        </div>
      </div>
      <div className={service_style.innerBox_Text }>
        <p className={service_style.innberBox_Text_Alignment }>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;