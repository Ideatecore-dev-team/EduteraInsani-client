import React from "react";
import LoginCard from "./LoginCard";
import LoginTagline from "./LoginTagline";
import "./LoginSection.css";

function LoginSection() {
  return (
    <div className="login-section w-full h-screen bg-background flex flex-col justify-center items-center relative">
      <div className="blue-background h-screen absolute 2xl:left-[1282px] xl:left-[976px] right-0 z-10"></div>
      <div className="login-container flex w-base-content items-center gap-6 z-20 relative">
        <LoginTagline />
        <LoginCard />
      </div>
    </div>
  );
}

export default LoginSection;
