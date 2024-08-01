import React, { useState, useEffect } from "react";
import ClassBanner_1 from "/public/images/KelasBahasaArab.png";
import ClassBanner_2 from "/public/images/KelasBahasaJepang.png"
import ClassBanner_3 from "/public/images/KelasSkillMelukis.png"
import ClassBanner_4 from "/public/images/KelasSkillMenulis.png"
import ClassBanner_5 from "/public/images/KelasSkillProgramming.png"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

const AllClassComponent = ({ category }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const categoryClass = [
        {
        id: 1,
        image_banner: ClassBanner_1,
        kelas: "Kelas Bahasa Arab",
        desc: "Tingkatkan kemampuan berbahasa Arab Anda dengan kelas intensif yang mencakup percakapan, tata bahasa, dan budaya.",
        price_pendaftaran: "200.000",
        price_bulanan: "250.000",
        contact: "6289690697474"
        },{
        id: 2,
        image_banner: ClassBanner_2,
        kelas: "Kelas Bahasa Jepang",
        desc: "Pelajari bahasa Jepang dengan fokus pada percakapan sehari-hari, tata bahasa, dan budaya Jepang.",
        price_pendaftaran: "220.000",
        price_bulanan: "250.000",
        contact: "6289690697474"
        },{
        id: 3,
        image_banner: ClassBanner_3,
        kelas: "Kelas Melukis",
        desc: "Kembangkan kreativitas Anda dengan mempelajari teknik-teknik melukis dan menggambar dari dasar hingga tingkat lanjut.",
        price_pendaftaran: "150.000",
        price_bulanan: "300.000",
        contact: "6289690697474"
        },{
        id: 4,
        image_banner: ClassBanner_4,
        kelas: "Kelas Kepenulisan",
        desc: "Asah kemampuan menulis Anda dengan berbagai latihan menulis kreatif, mulai dari cerita pendek hingga puisi.",
        price_pendaftaran: "100.000",
        price_bulanan: "250.000",
        contact: "6289690697474"
        },{
        id: 5,
        image_banner: ClassBanner_5,
        kelas: "Pemograman Dasar",
        desc: "Pelajari dasar-dasar pemrograman mulai dari struktur kontrol, hingga teknik-teknik pengkodean dasar.",
        price_pendaftaran: "250.000",
        price_bulanan: "400.000",
        contact: "6289690697474"
        },
    ];

    const filteredClasses =
        category === 1
        ? categoryClass.filter((item) => item.kelas.includes("Kelas Bahasa"))
        : category === 2
        ? categoryClass.filter((item) => !item.kelas.includes("Bahasa"))
        : categoryClass;

    return (
        <div className="digital-schooling-cards flex flex-wrap w-[14.1875rem] lg:w-[1152px] lg:justify-center items-center gap-6">
        {isMobile ? (
            <Swiper
            spaceBetween={25}
            slidesPerView={0.9}
            centeredSlides={true}
            modules={[Navigation, FreeMode]}
            className=" w-full "
            >
            {filteredClasses.map((category) => (
                <SwiperSlide key={category.id}>
                <div className="sc-card flex lg:w-[368px] w-[227px] lg:h-[523px] h-auto flex-col items-start bg-white rounded-2xl">
                <img src={category.image_banner} alt="card-banner" className="w-full"/>
                <div className="card-content flex lg:h-[351px] lg:p-6  p-[14.674px] flex-col lg:justify-between items-start lg:flex-shrink-0 gap-[29.348px] self-stretch bg-white rounded-[32px]">
                    <div className="all-content flex flex-col items-start gap-4 self-stretch">
                        <div className="title-and-desc flex flex-col items-start gap-[15px] self-stretch">
                        <h3 className="text-lg lg:text-2xl font-semibold text-primary lg:self-stretch">
                            {category.kelas}
                        </h3>
                        <p className="lg:text-base text-sm w-full font-normal text-neutral-2 lg:self-stretch">
                            {category.desc}
                        </p>
                        </div>
                        <div className="svg-tai h-0 self-stretch stroke-[1px] stroke-secondary">
                            <div className=" xs:block lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" width="199" height="2" viewBox="0 0 199 2" fill="none">
                                <path d="M0.673828 0.771729H198.326" stroke="#A88646"/>
                                </svg>
                            </div>
                            <div className=" hidden lg:block">
                                <svg xmlns="http://www.w3.org/2000/svg" width="320" height="2" viewBox="0 0 320 2" fill="none">
                                <path d="M0 1H320" stroke="#A88646"/>
                                </svg>
                            </div>
                        </div>
                        <div className="price-container flex justify-between lg:items-center items-start self-stretch">
                            <div className="pendaftaran-container flex flex-col items-start gap-1 ">
                                <p className=" self-stretch lg:text-base text-xs font-normal text-neutral-2">
                                Pendaftaran
                                </p>
                                <p className=" self-stretch text-base font-semibold text-primary">
                                    Rp {category.price_pendaftaran}
                                </p>
                            </div>
                            <div className="bulanan-container flex flex-col items-start gap-1">
                                <p className=" self-stretch lg:text-base text-xs font-normal lg:text-right text-neutral-2">
                                Bulanan
                                </p>
                                <p className=" self-stretch text-base font-semibold text-secondary">
                                    Rp {category.price_bulanan}
                                </p>
                            </div>
                        </div>
                    </div>
                    <a href={"https://wa.me/" + category.contact} className="buttons flex py-[12px] px-[16px] justify-center items-center gap-2 self-stretch rounded-[32px] bg-secondary shadow-shortCourse">
                        <p className="text-base text-center text-white font-normal flex items-center justify-center space-x-1">
                            <span className="block lg:inline">Daftar</span>
                            <span className="lg:hidden inline">Kelas</span>
                            <span className="hidden lg:inline">melalui Whatsapp</span>
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path d="M12.6904 1.61963C6.99711 1.61963 2.38128 6.19936 2.38128 11.8493C2.38128 13.7819 2.92184 15.5894 3.86061 17.1315L2 22.6196L7.70769 20.8064C9.18463 21.6166 10.8832 22.0789 12.6904 22.0789C18.3845 22.0789 23 17.4985 23 11.8493C23 6.19936 18.3845 1.61963 12.6904 1.61963ZM17.8168 15.7342C17.5742 16.3354 16.4773 16.8841 15.9934 16.9094C15.5099 16.9351 15.4961 17.2841 12.8602 16.1391C10.2247 14.9937 8.63905 12.2089 8.51403 12.0295C8.38892 11.8508 7.49309 10.5742 7.54142 9.28946C7.59008 8.00447 8.29362 7.39824 8.54473 7.1461C8.79556 6.89358 9.08314 6.84835 9.25873 6.84549C9.4663 6.84211 9.60073 6.8393 9.75434 6.84497C9.90781 6.85079 10.1383 6.81286 10.3379 7.34368C10.5374 7.87444 11.015 9.17897 11.076 9.31191C11.1371 9.44499 11.1748 9.59907 11.0808 9.76993C10.9865 9.94116 10.9382 10.0481 10.8014 10.1957C10.6638 10.3433 10.512 10.5258 10.3893 10.6386C10.2524 10.7635 10.1094 10.8998 10.2533 11.1668C10.3971 11.4337 10.8933 12.3085 11.6492 13.0295C12.6207 13.9562 13.4585 14.2636 13.7163 14.4037C13.9748 14.5445 14.1291 14.5289 14.2894 14.3602C14.449 14.1915 14.9756 13.6221 15.1611 13.3679C15.3465 13.113 15.5202 13.1629 15.7584 13.2587C15.9964 13.3549 17.2657 14.0348 17.5243 14.1751C17.7826 14.3153 17.9552 14.3874 18.017 14.4986C18.0787 14.6101 18.0592 15.1328 17.8168 15.7342Z" fill="white"/>
                        </svg>
                    </a>
                </div>
                </div>
                </SwiperSlide>
            ))}
            </Swiper>
        ) : (
            filteredClasses.map((category) => (
            <div key={category.id} className="sc-card flex lg:w-[368px] w-[227px] lg:h-[523px] h-[420.793px] flex-col items-start bg-white rounded-2xl">
                <img src={category.image_banner} alt="card-banner" className="w-full"/>
                <div className="card-content flex lg:h-[351px] lg:p-6  p-[14.674px] flex-col lg:justify-between items-start lg:flex-shrink-0 gap-[auto] self-stretch bg-white rounded-[32px]">
                    <div className="all-content flex flex-col items-start gap-4 self-stretch">
                        <div className="title-and-desc flex flex-col items-start gap-[15px] self-stretch">
                        <h3 className="text-lg lg:text-2xl font-semibold text-primary lg:self-stretch">
                            {category.kelas}
                        </h3>
                        <p className="lg:text-base text-sm w-full font-normal text-neutral-2 lg:self-stretch">
                            {category.desc}
                        </p>
                        </div>
                        <div className="svg-tai h-0 self-stretch stroke-[1px] stroke-secondary ">
                            <div className=" xs:block lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" width="199" height="2" viewBox="0 0 199 2" fill="none">
                                <path d="M0.673828 0.771729H198.326" stroke="#A88646"/>
                                </svg>
                            </div>
                            <div className=" hidden lg:block">
                                <svg xmlns="http://www.w3.org/2000/svg" width="320" height="2" viewBox="0 0 320 2" fill="none">
                                <path d="M0 1H320" stroke="#A88646"/>
                                </svg>
                            </div>
                        </div>
                        <div className="price-container flex justify-between lg:items-center items-start self-stretch">
                            <div className="pendaftaran-container flex flex-col items-start gap-1 ">
                                <p className=" self-stretch lg:text-base text-xs font-normal text-neutral-2">
                                Pendaftaran
                                </p>
                                <p className=" self-stretch text-base font-semibold text-primary">
                                    Rp {category.price_pendaftaran}
                                </p>
                            </div>
                            <div className="bulanan-container flex flex-col items-start gap-1">
                                <p className=" self-stretch lg:text-base text-xs font-normal lg:text-right text-neutral-2">
                                Bulanan
                                </p>
                                <p className=" self-stretch text-base font-semibold text-secondary">
                                    Rp {category.price_bulanan}
                                </p>
                            </div>
                        </div>
                    </div>
                    <a href={"https://wa.me/" + category.contact} className="buttons flex py-[12px] px-[16px] justify-center items-center gap-2 self-stretch rounded-[32px] bg-secondary shadow-shortCourse">
                        <p className="text-base text-center text-white font-normal flex items-center justify-center space-x-1">
                            <span className="block lg:inline">Daftar</span>
                            <span className="lg:hidden inline">Kelas</span>
                            <span className="hidden lg:inline">melalui Whatsapp</span>
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path d="M12.6904 1.61963C6.99711 1.61963 2.38128 6.19936 2.38128 11.8493C2.38128 13.7819 2.92184 15.5894 3.86061 17.1315L2 22.6196L7.70769 20.8064C9.18463 21.6166 10.8832 22.0789 12.6904 22.0789C18.3845 22.0789 23 17.4985 23 11.8493C23 6.19936 18.3845 1.61963 12.6904 1.61963ZM17.8168 15.7342C17.5742 16.3354 16.4773 16.8841 15.9934 16.9094C15.5099 16.9351 15.4961 17.2841 12.8602 16.1391C10.2247 14.9937 8.63905 12.2089 8.51403 12.0295C8.38892 11.8508 7.49309 10.5742 7.54142 9.28946C7.59008 8.00447 8.29362 7.39824 8.54473 7.1461C8.79556 6.89358 9.08314 6.84835 9.25873 6.84549C9.4663 6.84211 9.60073 6.8393 9.75434 6.84497C9.90781 6.85079 10.1383 6.81286 10.3379 7.34368C10.5374 7.87444 11.015 9.17897 11.076 9.31191C11.1371 9.44499 11.1748 9.59907 11.0808 9.76993C10.9865 9.94116 10.9382 10.0481 10.8014 10.1957C10.6638 10.3433 10.512 10.5258 10.3893 10.6386C10.2524 10.7635 10.1094 10.8998 10.2533 11.1668C10.3971 11.4337 10.8933 12.3085 11.6492 13.0295C12.6207 13.9562 13.4585 14.2636 13.7163 14.4037C13.9748 14.5445 14.1291 14.5289 14.2894 14.3602C14.449 14.1915 14.9756 13.6221 15.1611 13.3679C15.3465 13.113 15.5202 13.1629 15.7584 13.2587C15.9964 13.3549 17.2657 14.0348 17.5243 14.1751C17.7826 14.3153 17.9552 14.3874 18.017 14.4986C18.0787 14.6101 18.0592 15.1328 17.8168 15.7342Z" fill="white"/>
                        </svg>
                    </a>
                </div>
            </div>
            ))
        )}
        </div>
    );
};

export default AllClassComponent;
