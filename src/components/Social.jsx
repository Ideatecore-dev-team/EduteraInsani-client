import React from "react";
import "./Social.css";
import Map from "/images/map.png";
import MapPoint1 from "/images/map-point-1.png";
import MapPoint2 from "/images/map-point-2.png";
import MapPoint3 from "/images/map-point-3.png";

function Social() {
  return (
    <div className="flex py-24 items-center justify-center self-stretch bg-white">
      <div className="map-container flex flex-col items-center gap-10 bg-background relative">
        <img src={Map} alt="map" />
        <img src={MapPoint1} alt="map-point" className="absolute map-point-1" />
        <img src={MapPoint2} alt="map-point" className="absolute map-point-2" />
        <img src={MapPoint3} alt="map-point" className="absolute map-point-3" />
        <div className="content bg-primary flex p-6 h-width-3 flex-col justify-end items-start gap-4 absolute h-height-3">
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
