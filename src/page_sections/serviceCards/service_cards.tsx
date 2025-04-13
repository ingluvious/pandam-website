import React from "react";
import Sstyle from "../../styleSheets/style_serviceCard.module.scss";

interface ServiceCardProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  backgroundColour?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imageSrc, altText, title, description }) => {
  return (
    <div className={Sstyle.innerBox}>
      <div className={
        Sstyle.imageAndHeadingContainer
      }>
        <div className={ Sstyle.imageCircleBackground}>
          <img src={imageSrc} alt={altText} className={Sstyle.image_Sizes}/>
        </div>
        <div className={Sstyle.innerBox_Heading }>
          <h4>{title}</h4>
        </div>
      </div>
      <div className={Sstyle.innerBox_Text}>
        <div className={Sstyle.innberBox_Text_Alignment}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;