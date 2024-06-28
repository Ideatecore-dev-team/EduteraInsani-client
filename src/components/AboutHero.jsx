import "./AboutHero.css";
import ButtonLink from "./Buttons/ButtonLink";
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
      <div className="about-hero pb-24 flex items-center self-stretch bg-white max-w-6xl mx-auto">
        <div className="about-content bg-primary w-width-7 pt-24 px-6 pb-6 flex flex-col justify-end items-start gap-4 absolute">
          <h2 className="text-white text-4xl font-semibold">
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
        <div className="about-hero-images w-base-content relative">
          <img
            className="absolute banner z-20"
            src={TitleBanner}
            alt="Banner"
          />
          <img className="absolute logo z-10" src={Logo} alt="logo" />
          <div className="about-icon-1 absolute">
            <AboutIcon1 />
          </div>
          <div className="about-icon-2 absolute">
            <AboutIcon2 />
          </div>
          <div className="about-icon-3 absolute">
            <AboutIcon3 />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutHero;
