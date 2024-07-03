import "./AboutHero.css";
import ButtonLink from "./Buttons/LinkButton";
import Column from "./Layouts/Column";
import Container from "./Layouts/Container";
import Row from "./Layouts/Row";
import TitleBanner from "/images/about-title-banner.png";
import Logo from "/images/logo-silhouette.png";
import { ArrowRightIcon } from "../assets/svg/aboutUs/ArrowRightIcon";
import { AboutIcon1 } from "../assets/svg/aboutUs/AboutIcon1";
import { AboutIcon2 } from "../assets/svg/aboutUs/AboutIcon2";
import { AboutIcon3 } from "../assets/svg/aboutUs/AboutIcon3";

function AboutHero() {
  return (
    <>
      <div className="about-hero lg:pb-24 h-[45.3rem] lg:h-[33.625rem] flex flex-wrap lg:w-base-content w-mobile-6  items-center self-stretch bg-white  mx-auto">
        <div className="about-content bg-primary lg:w-width-7 w-mobile-6 -mt-16 lg:-mt-0 pt-24 px-6 pb-6 flex flex-col justify-end items-start gap-4 absolute">
          <h2 className="text-white text-2xl  lg:text-4xl font-semibold">
            Memperkenalkan Digital Schooling dengan Kurikulum Merdeka Plus!
          </h2>
          <p className="text-base font-normal text-background">
            Kurikulum Merdeka Plus mempromosikan pendekatan yang fleksibel dan
            berpusat pada siswa, mendorong pembelajaran mandiri dan berpikir
            kritis.
          </p>
          <ButtonLink
            border={true}
            caption="Pelajari lebih lanjut"
            to="/curriculum"
          >
            <ArrowRightIcon />
          </ButtonLink>
        </div>
        <div className="about-hero-images mt-[24rem] lg:mt-0  w-mobile-6 lg:w-base-content relative">
          <img
            className="absolute banner z-20"
            src={TitleBanner}
            alt="Banner"
          />
          <img className="absolute logo z-10" src={Logo} alt="logo" />
          <div className="about-icon-1 absolute ">
            <AboutIcon1 />
          </div>
          <div className="about-icon-2 absolute">
            <AboutIcon2 />
          </div>
          <div className="about-icon-3 absolute ">
            <AboutIcon3 />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutHero;
