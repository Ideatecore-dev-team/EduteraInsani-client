import React from "react";
import "./Social.css";
import Map from "/images/map.png";

function Social() {
  return (
    <div className="flex py-24 items-center justify-center self-stretch bg-white">
      <div className="map-container flex flex-col items-center gap-10 bg-background relative">
        <img src={Map} alt="map" />
        <div className="content bg-primary flex p-6 h-width-3 flex-col justify-end items-start gap-4 absolute">
          <h4 className="text-2xl font-bold text-background">
            Digital Schooling
            <br />
            untuk Pelajar
            <br />
            Nusantara
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Social;
