import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import RansenganGif from "../../images/Rasengan.gif"
import banner_styles from "../../styleSheets/style_banner.module.scss"
import Button from "../utilityFiles/GlobalButton";

const Section_Banner: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={banner_styles.banner_section_format}>
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {opacity: 1, transition: { staggerChildren: 1 },},
        }}
        className={`${banner_styles.banner_heading} ${banner_styles.motion_div}`}
        style={{
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "0rem" : "2rem"
        }}
      >
        <motion.h1
          className={banner_styles.motion_heading}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
          }}
        >
          .Unlocking Potential
        </motion.h1>
        <img
        src={RansenganGif}
        alt="Spiral Sphere"
        className={banner_styles.banner_pandamLogo}
      />
        <motion.h1
          className={banner_styles.motion_heading}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut", delay: 0.75 } },
          }}
        >
          Powering Success. 
        </motion.h1>
      </motion.div>
      <div style={{paddingTop: "30px"}}>
        <Link to="/contact">
          <Button text="Get in Touch" />
      </Link>
      </div>
    </div>
  );
};

export default Section_Banner;