import React from "react";
import "./Teacher.css";
import Teacher1 from "/images/teacher-card-1.png";

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
          <div className="teacher-card flex flex-col justify-between items-center px-6 pb-6 bg-white rounded-2xl relative">
            <img
              src={Teacher1}
              alt="Profile Picture Teacher"
              className="absolute"
            />
            <div className="card-t-content flex flex-col items-center gap-2 self-stretch text-center">
              <h4 className="text-2xl text-primary font-semibold">
                Nur Indrawati Pary
              </h4>
              <p className="text-base text-neutral-2">
                “Education in this era is about equipping individuals with the
                skills to navigate an ever-changing world. It's about fostering
                critical thinking, adaptability, and a lifelong love for
                learning that empowers people to not just succeed in their
                careers, but also to thrive as global citizens and thoughtful
                leaders."
              </p>
            </div>
            <p className="text-base text-primary font-semibold">
              Tutor of Social Science
            </p>
          </div>
          <div className="teacher-card flex flex-col justify-between items-center px-6 pb-6 bg-white rounded-2xl relative">
            <img
              src={Teacher1}
              alt="Profile Picture Teacher"
              className="absolute"
            />
            <div className="card-t-content flex flex-col items-center gap-2 self-stretch text-center">
              <h4 className="text-2xl text-primary font-semibold">
                Nur Indrawati Pary
              </h4>
              <p className="text-base text-neutral-2">
                “Education in this era is about equipping individuals with the
                skills to navigate an ever-changing world. It's about fostering
                critical thinking, adaptability, and a lifelong love for
                learning that empowers people to not just succeed in their
                careers, but also to thrive as global citizens and thoughtful
                leaders."
              </p>
            </div>
            <p className="text-base text-primary font-semibold">
              Tutor of Social Science
            </p>
          </div>
          <div className="teacher-card flex flex-col justify-between items-center px-6 pb-6 bg-white rounded-2xl relative">
            <img
              src={Teacher1}
              alt="Profile Picture Teacher"
              className="absolute"
            />
            <div className="card-t-content flex flex-col items-center gap-2 self-stretch text-center">
              <h4 className="text-2xl text-primary font-semibold">
                Nur Indrawati Pary
              </h4>
              <p className="text-base text-neutral-2">
                “Education in this era is about equipping individuals with the
                skills to navigate an ever-changing world. It's about fostering
                critical thinking, adaptability, and a lifelong love for
                learning that empowers people to not just succeed in their
                careers, but also to thrive as global citizens and thoughtful
                leaders."
              </p>
            </div>
            <p className="text-base text-primary font-semibold">
              Tutor of Social Science
            </p>
          </div>
          <div className="teacher-card flex flex-col justify-between items-center px-6 pb-6 bg-white rounded-2xl relative">
            <img
              src={Teacher1}
              alt="Profile Picture Teacher"
              className="absolute"
            />
            <div className="card-t-content flex flex-col items-center gap-2 self-stretch text-center">
              <h4 className="text-2xl text-primary font-semibold">
                Nur Indrawati Pary
              </h4>
              <p className="text-base text-neutral-2">
                “Education in this era is about equipping individuals with the
                skills to navigate an ever-changing world. It's about fostering
                critical thinking, adaptability, and a lifelong love for
                learning that empowers people to not just succeed in their
                careers, but also to thrive as global citizens and thoughtful
                leaders."
              </p>
            </div>
            <p className="text-base text-primary font-semibold">
              Tutor of Social Science
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teacher;
