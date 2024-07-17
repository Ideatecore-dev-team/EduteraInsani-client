import AboutHero from "../components/AboutHero";
import Booklet from "../components/Booklet";
import WhatIs from "../components/WhatIs";
import Vision from "../components/Vision";
import OurProgram from "../components/OurProgramComponents";
import Mission from "../components/Mission";
import Social from "../components/Social";
import Facilities from "../components/Fasilitas";

function AboutUs() {
  return (
    <div className="about">
      <AboutHero />
      <WhatIs />
      <Vision />
      <Mission />
      <Social />
      <OurProgram className="pt-24" />
      <Facilities />
      <Booklet />
    </div>
  );
}

export default AboutUs;
