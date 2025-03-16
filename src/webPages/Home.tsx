import React from "react";
import Banner from "../Sections/HomePage/sec_Banner";
import Services from "../Sections/HomePage/sec_Services";

const Home: React.FC = () => {
  return (
    <>
      {/* Banner of the Home Page */}
      <Banner />
      {/* Services that Pandam Provides */}
      <Services />
    </>
  );
};

export default Home;