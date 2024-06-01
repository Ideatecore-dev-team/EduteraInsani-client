import React from "react";
import AboutHero from "../components/AboutHero";
import Booklet from "../components/Booklet";
import WhatIs from "../components/WhatIs";

function AboutUs() {
  return (
    <div className="about">
      <AboutHero />
      <WhatIs />
      <Booklet />
    </div>
  );
}

export default AboutUs;
