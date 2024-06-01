import React from "react";
import Hero from "../components/Hero";
import WhyEdutera from "../components/WhyEdutera";
import Digital from "../components/Digital";
import OurProgram from "../components/OurProgram";
import HomeCurriculum from "../components/HomeCurriculum";
import LearningPatch from "../components/LearningPatch";
import Teacher from "../components/Teacher";
import Booklet from "../components/Booklet";

function Home() {
  return (
    <>
      <Hero />
      <WhyEdutera />
      <Digital />
      <OurProgram />
      <HomeCurriculum />
      <LearningPatch />
      <Teacher />
      <Booklet />
    </>
  );
}

export default Home;
