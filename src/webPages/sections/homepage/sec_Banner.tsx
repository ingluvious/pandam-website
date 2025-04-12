import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import RansenganGif from "../../../images/Rasengan.gif"
import styles from "./stylesheets/style_Banner"

const Sec_Banner: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={styles.banner_section_format}>
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {opacity: 1, transition: { staggerChildren: 1 },},
        }}
        style={{
          ...styles.banner_heading,
          ...styles.motion_div,
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "0rem" : styles.motion_div.gap
        }}
      >
        <motion.h1
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
        style={styles.banner_pandamLogo}
      />
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut", delay: 1.5 } },
          }}
        >
          Powering Success.
        </motion.h1>
      </motion.div>
      
    </div>
  );
};

export default Sec_Banner;