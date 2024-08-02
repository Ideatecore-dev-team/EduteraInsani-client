import ButtonLink from "./Buttons/LinkButton";
import TitleBanner from "/images/Ourprogram-title-banner.png";
import Logo from "/images/logo-silhouette.png";
import { ArrowRightIcon } from "../assets/svg/aboutUs/ArrowRightIcon";
import { AboutIcon1 } from "../assets/svg/aboutUs/AboutIcon1";
import { AboutIcon2 } from "../assets/svg/aboutUs/AboutIcon2";
import { AboutIcon3 } from "../assets/svg/aboutUs/AboutIcon3";

function AboutHero() {
  return (
    <>
      <div className="about-hero lg:pb-24 h-[44.5rem] lg:h-[33.625rem] flex flex-wrap lg:w-base-content w-full  items-center xs:justify-center self-stretch mx-auto">
        <div className="about-content bg-primary lg:w-width-7 -mt-16 lg:-mt-0 pt-24 px-6 pb-6 flex flex-col justify-end items-start gap-4 xs:right-4 xs:left-4 absolute">
          <h2 className="text-white text-2xl  lg:text-4xl font-semibold">
            Digital Schooling <br /> - Edu Tera Insani
          </h2>
          <p className="text-base font-normal text-background">
            Rasakan pembelajaran daring yang menyenangkan dan interaktif dengan
            proyek integratif yang mendorong kemandirian belajar anak.
          </p>
          <ButtonLink border={true} caption="Daftar Trial Sekarang" to="/daftar-trial">
            <ArrowRightIcon />
          </ButtonLink>
        </div>
        <div className="about-hero-images mt-[24rem] lg:mt-0 lg:w-base-content relative">
          <img
            className="lg:absolute xs:relative banner z-20 lg:right-[110px] w-[219.171px] lg:w-[382px]"
            src={TitleBanner}
            alt="Banner"
          />
          <img
            className="absolute logo z-10 xs:left-[45.789px] xs:top-8 xs:size-[171px]"
            src={Logo}
            alt="logo"
          />
          <div className="about-icon-1 absolute xs:size-[35.265px] top-0 right-[-48px]">
            <AboutIcon1 />
          </div>
          <div className="about-icon-2 absolute xs:size-[35.265px] xs:!left-[-13px] xs:!top-[39px]">
            <AboutIcon2 />
          </div>
          <div className="about-icon-3 absolute xs:size-[35.265px] xs:!right-[-45px] xs:!bottom-[89px] ">
            <AboutIcon3 />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutHero;
