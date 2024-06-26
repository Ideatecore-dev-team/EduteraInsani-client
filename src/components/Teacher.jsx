import React from "react";
import "./Teacher.css";
import TeacherCarousel from "./Carousel/TeacherCarousel";

function Teacher() {
  return (
    <div className="teacher-section flex items-center justify-center lg:pb-24 pb-14 bg-background">
      <div className="teacher-container flex flex-col lg:w-base-content w-width-sm items-center justify-center">
        <h2 className="text-primary text-2xl lg:text-4xl font-semibold text-center">
          Kenali Pengajar
          <br />
          Kami
        </h2>

        <TeacherCarousel />
      </div>
    </div>
  );
}

export default Teacher;
