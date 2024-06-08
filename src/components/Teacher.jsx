import React from "react";
import "./Teacher.css";
import TeacherCarousel from "./Carousel/TeacherCarousel";

function Teacher() {
  return (
    <div className="teacher-section flex items-center pb-24 bg-background">
      <div className="teacher-container flex flex-col w-base-content items-start mx-auto">
        <h2 className="text-primary text-4xl font-semibold text-center w-full">
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
