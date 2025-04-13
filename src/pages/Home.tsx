import React from "react";
import Banner from "../page_sections/home_page/section_banner"
import Services from "../page_sections/home_page/section_services"
import HorizontalDivider from "../page_sections/utilityFiles/HorizontalDivider";

const Home: React.FC = () => {
  return (
    <>
      {/* Banner of the Home Page */}
      <Banner />
      {/* Put section divider here */}
      <HorizontalDivider />
      {/* Services that Pandam Provides */}
      <Services />
    </>
  );
};

export default Home;