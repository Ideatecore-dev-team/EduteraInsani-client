import React from "react";
import Hero from "../components/OurProgramHero";
import Curriculum from "../components/ShortCourseCurriculum";
import Kelebihan from "../components/KelebihanShortCourseSection";
import DigitalSchooling from "../components/ShortCourse";

const ShortCourse = function () {
    return (
        <>
        {/* <Hero /> */}
        <DigitalSchooling />
        <Kelebihan />
        <Curriculum />
        </>
    );
};

export default ShortCourse;
