import React from "react";
import AboutHero from "../components/AboutHero";
import Booklet from "../components/Booklet";
import WhatIs from "../components/WhatIs";
import Vision from "../components/Vision";
import OurProgram from "../components/OurProgram";
import Mission from "../components/Mission";
import Social from "../components/Social";
import Facilitiess from "../components/Fasilitas";

function AboutUs() {
  return (
    <div className="about">
      <AboutHero />
      <WhatIs />
      <Vision />
      <Mission />
      <Social />
      <OurProgram />
      <Facilitiess/>
      <Booklet />
    </div>
  );
}

export default AboutUs;
