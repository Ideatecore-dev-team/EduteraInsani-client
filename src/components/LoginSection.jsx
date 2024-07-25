import React from "react";
import LoginCard from "./LoginCard";
import LoginTagline from "./LoginTagline";
import "./LoginSection.css";

function LoginSection() {
  return (
    <div className="login-section xs:px-4 w-full h-screen bg-background flex flex-col justify-center items-center relative xs:self-stretch">
      <div className="blue-background h-screen absolute 2xl:left-[1282px] xl:left-[976px] right-0 xs:left-0 xs:bottom-0 z-10 xs:h-[9%]"></div>
      <div className="login-container flex xs:flex-col w-full lg:w-base-content items-center gap-6 z-20 relative self-stretch">
        <LoginTagline />
        <LoginCard />
      </div>
    </div>
  );
}

export default LoginSection;
