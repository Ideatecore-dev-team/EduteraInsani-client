import React from "react";
import "./Teacher.css";
import Teacher1 from "/images/teacher-card-1.png";
import teachers from "../databases/teachers.json"

function Teacher() {
  
  return (
    <div className="teacher-section flex items-center pb-24 bg-background">
      <div className="teacher-container flex flex-col w-base-content items-start mx-auto">
        <h2 className="text-primary text-4xl font-semibold text-center w-full">
          Kenali Pengajar
          <br />
          Kami
        </h2>
        <div className="teacher-cards flex items-start gap-6 self-stretch">
          {teachers.map((teacher,index) => { 
            return( 
            <div key={index} className="teacher-card flex flex-col justify-between items-center px-6 pb-6 bg-white rounded-2xl relative">
            <img
              src={teacher.imgSrc}
              alt="Profile Picture Teacher"
              className="absolute"
            />
            <div className="card-t-content flex flex-col items-center gap-2 self-stretch text-center">
              <h4 className="text-2xl text-primary font-semibold">
                {teacher.name}
              </h4>
              <p className="text-base text-neutral-2">
                {teacher.quote}
              </p>
            </div>
            <p className="text-base text-primary font-semibold">
              {teacher.tutor}
            </p>
          </div>)
          })}
        </div>
      </div>
    </div>
  );
}

export default Teacher;
