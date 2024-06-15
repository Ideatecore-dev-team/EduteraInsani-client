import React, { useRef } from "react";
import Hero from "../components/Hero";
import WhyEdutera from "../components/WhyEdutera";
import Digital from "../components/Digital";
import OurProgram from "../components/OurProgram";
import HomeCurriculum from "../components/HomeCurriculum";
import LearningPatch from "../components/LearningPatch";
import Teacher from "../components/Teacher";
import Booklet from "../components/Booklet";

function Home() {
  const teacherRef = useRef(null);

  const scrollToTeacherSection = () => {
    if (teacherRef.current) {
      teacherRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home">
      <Hero onCardHeroClick={scrollToTeacherSection} />
      <WhyEdutera />
      <Digital />
      <OurProgram />
      <HomeCurriculum />
      <LearningPatch />
      <div ref={teacherRef}>
        <Teacher />
      </div>
      <Booklet />
    </div>
  );
}

export default Home;
