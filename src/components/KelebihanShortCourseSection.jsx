import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function AboutHero() {
    return (
        <>
        <div className="kelebihan-section flex py-12 lg:py-24 lg:flex-col lg:items-center justify-center items-start gap-gap10 bg-white">
            <div className="kelebihan-container flex w-[342px] lg:w-[1152px] lg:justify-between xs:flex-col items-center lg:gap-12 gap-[46px] xsflex-shrink-0">
                <div className="kelebihan-title flex w-[310px] flex-col lg:items-start items-center gap-4">
                    <h2 className=" lg:w-[368px] text-2xl lg:text-4xl xs:text-center text-primary font-semibold tracking-[-0.48px] lg:tracking-[-0.72px]">
                    Benefits of joining
                    </h2>
                    <p className=" lg:w-[368px] text-base xs:text-center text-neutral-2 font-normal self-stretch">
                    Nikmati pembelajaran tambahan diluar dari program utama Digital schooling.
                    </p>
                </div>
                <div className="kelebihan-cards flex flex-col items-start gap-4 lg:gap-6 self-stretch">
                    <div className="keunggulan-card flex p-4 lg:p-6 lg: items-start gap-2 lg:gap-4 self-stretch rounded-2xl border-[2px] border-secondary bg-white lg:w-[528px]">
                    <div className="icons-container flex size-[32px] p-1 content-center items-center bg-white flex-shrink-0">
                        <IoMdCheckmarkCircleOutline className=" text-secondary size-[24px]" />
                    </div>
                    <div className="title-desc flex flex-col items-start gap-2">
                        <h4 className=" text-lg lg:text-2xl  text-primary font-semibold self-stretch tracking-[-0.36px] lg:tracking-[-0.48px]">
                        Peningkatan Keterampilan
                        </h4>
                        <p className=" text-base  text-neutral-2 font-normal self-stretch tracking-[-0.32px]">
                        Tingkatkan keterampilan Anda dalam bidang tertentu seperti bahasa, seni, dan menulis melalui sesi pembelajaran yang fokus dan praktis di luar dari program digital schooling..
                        </p>
                    </div>
                    </div>
                    <div className="keunggulan-card flex p-4 lg:p-6 lg: items-start gap-2 lg:gap-4 self-stretch rounded-2xl border-[2px] border-secondary bg-white lg:w-[528px]">
                    <div className="icons-container flex size-[32px] p-1 content-center items-center bg-white flex-shrink-0">
                        <IoMdCheckmarkCircleOutline className=" text-secondary size-[24px]" />
                    </div>
                    <div className="title-desc flex flex-col items-start gap-2">
                        <h4 className=" text-lg lg:text-2xl  text-primary font-semibold self-stretch tracking-[-0.36px] lg:tracking-[-0.48px]">
                        Pembelajaran Fleksibel
                        </h4>
                        <p className=" text-base  text-neutral-2 font-normal self-stretch tracking-[-0.32px]">
                        Nikmati kemudahan belajar dengan kecepatan dan waktu Anda sendiri, menyesuaikan kursus dengan jadwal Anda yang ada.
                        </p>
                    </div>
                    </div>
                    <div className="keunggulan-card flex p-4 lg:p-6 lg: items-start gap-2 lg:gap-4 self-stretch rounded-2xl border-[2px] border-secondary bg-white lg:w-[528px]">
                    <div className="icons-container flex size-[32px] p-1 content-center items-center bg-white flex-shrink-0">
                        <IoMdCheckmarkCircleOutline className=" text-secondary size-[24px]" />
                    </div>
                    <div className="title-desc flex flex-col items-start gap-2">
                        <h4 className=" text-lg lg:text-2xl  text-primary font-semibold self-stretch tracking-[-0.36px] lg:tracking-[-0.48px]">
                        Peluang Beragam
                        </h4>
                        <p className=" text-base  text-neutral-2 font-normal self-stretch tracking-[-0.32px]">
                        Jelajahi berbagai mata pelajaran dan temukan minat baru, memberikan pengalaman pendidikan yang menyeluruh.
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default AboutHero;
