import "./Social.css";
import Map from "/images/Map-Container.png";

function Social() {
  return (
    <div className="flex py-16 lg:py-24 px-6 w-mobile-8 lg:w-auto items-center justify-center self-stretch  lg:bg-white">
      <div className="map-container flex flex-col items-center gap-10 bg-background relative">
        <img src={Map} alt="map w-mobile-6" />
        <div className="content w-[7.25rem] h-[10.4375rem] lg:w-auto bg-primary flex p-2 lg:p-6 h-width-3 flex-col justify-end items-start gap-4 absolute lg:h-height-3">
          <h4 className="lg:text-2xl text-base font-bold text-background">
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
