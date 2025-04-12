import React from "react";
import Banner from "./sections/homepage/sec_Banner"
import Services from "./sections/homepage/sec_Services"
import HorizontalDivider from "../utilityFiles/HorizontalDivider";

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