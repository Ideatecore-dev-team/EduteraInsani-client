import React from "react";
import Banner from "/public/images/Jadwal-Belajar.png"

function AboutHero() {
    return (
        <>
        <div className="jadwal-section flex w-[391px] lg:w-full pb-12 lg:pb-24 lg:flex-col lg:items-center justify-center items-start gap-gap10 bg-background">
            <div className="jadwal-container flex flex-col items-center lg:gap-12 gap-6">
                <h2 className=" text-2xl lg:text-4xl text-center text-primary font-semibold tracking-[-0.48px] lg:tracking-[-0.72px]">Jadwal Belajar</h2>
                <img src={Banner} alt="jadwal" className=" w-[342px] h-[138.344px] lg:w-[1152px] lg:h-[466px]"/>
            </div>
        </div>
        </>
    );
}

export default AboutHero;
