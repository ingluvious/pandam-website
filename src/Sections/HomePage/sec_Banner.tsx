import React from "react";
import { motion } from "framer-motion";
import pandamWhiteText from "../../images/pandam_logo_white_text_no_bg.png";
import styles from "../../styleSheets/style_Banner";

const sec_Banner: React.FC = () => {
  return (
    <div style={styles.banner_section_format}>
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 1 },
          },
        }}
        style={styles.banner_heading}
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
          }}
        >
          .Unlocking Potential
        </motion.h1>
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut", delay: 1.5 } },
          }}
        >
          .Powering Success
        </motion.h1>
      </motion.div>
      <img
        src={pandamWhiteText}
        alt="Pandam Logo - White Colour, no Background"
        style={styles.banner_pandamLogo}
      />
    </div>
  );
};

export default sec_Banner;