import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function AboutHero() {
    return (
        <>
        <div className="kelebihan-section flex w-[390px] lg:w-full pb-12 lg:pb-24 lg:flex-col lg:items-center justify-center items-start gap-gap10 bg-background">
            <div className="kelebihan-container flex w-[342px] lg:w-[1152px] lg:justify-between xs:flex-col items-center lg:gap-12 gap-[46px] xsflex-shrink-0">
                <div className="kelebihan-title flex w-[310px] flex-col lg:items-start items-center gap-4">
                    <h2 className=" lg:w-[368px] text-2xl lg:text-4xl xs:text-center text-primary font-semibold tracking-[-0.48px] lg:tracking-[-0.72px]">Kelebihan & <br/>Keunggulan Kami</h2>
                    <p className=" lg:w-[368px] text-base xs:text-center text-neutral-2 font-normal self-stretch">Nikmati pembelajaran yang fleksibel, materi terorganisir, dan dukungan dari pengajar berkualitas untuk pengalaman pendidikan terbaik.</p>
                </div>
                <div className="kelebihan-cards flex flex-col items-start gap-4 lg:gap-6 self-stretch">
                    <div className="keunggulan-card flex p-4 lg:p-6 lg: items-start gap-2 lg:gap-4 self-stretch rounded-2xl border-[2px] border-secondary bg-white lg:w-[528px]">
                        <div className="icons-container flex size-[32px] p-1 content-center items-center bg-white flex-shrink-0">
                            <IoMdCheckmarkCircleOutline className=" text-secondary size-[24px]"/>
                        </div>
                        <div className="title-desc flex flex-col items-start gap-2">
                            <h4 className=" text-lg lg:text-2xl  text-primary font-semibold self-stretch tracking-[-0.36px] lg:tracking-[-0.48px]">Fleksibilitas Belajar</h4>
                            <p className=" text-base  text-neutral-2 font-normal self-stretch tracking-[-0.32px]">
                                Siswa dapat belajar kapan saja dan di mana saja, menyesuaikan jadwal dan lingkungan belajar mereka.
                            </p>
                        </div>
                    </div>
                    <div className="keunggulan-card flex p-4 lg:p-6 lg: items-start gap-2 lg:gap-4 self-stretch rounded-2xl border-[2px] border-secondary bg-white lg:w-[528px]">
                        <div className="icons-container flex size-[32px] p-1 content-center items-center bg-white flex-shrink-0">
                            <IoMdCheckmarkCircleOutline className=" text-secondary size-[24px]"/>
                        </div>
                        <div className="title-desc flex flex-col items-start gap-2">
                            <h4 className=" text-lg lg:text-2xl  text-primary font-semibold self-stretch tracking-[-0.36px] lg:tracking-[-0.48px]">Materi Terorganisir</h4>
                            <p className=" text-base  text-neutral-2 font-normal self-stretch tracking-[-0.32px]">
                                Semua materi pembelajaran, tugas, dan penilaian diatur dengan baik untuk memudahkan akses dan pemahaman siswa.
                            </p>
                        </div>
                    </div>
                    <div className="keunggulan-card flex p-4 lg:p-6 lg: items-start gap-2 lg:gap-4 self-stretch rounded-2xl border-[2px] border-secondary bg-white lg:w-[528px]">
                        <div className="icons-container flex size-[32px] p-1 content-center items-center bg-white flex-shrink-0">
                            <IoMdCheckmarkCircleOutline className=" text-secondary size-[24px]"/>
                        </div>
                        <div className="title-desc flex flex-col items-start gap-2">
                            <h4 className=" text-lg lg:text-2xl  text-primary font-semibold self-stretch tracking-[-0.36px] lg:tracking-[-0.48px]">Dukungan Pengajar Berkualitas</h4>
                            <p className=" text-base  text-neutral-2 font-normal self-stretch tracking-[-0.32px]">
                                Siswa mendapatkan bimbingan dari guru-guru ahli yang siap membantu dalam setiap langkah pembelajaran mereka.
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
