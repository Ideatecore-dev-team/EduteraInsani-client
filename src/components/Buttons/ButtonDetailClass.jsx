import React, { useEffect, useState } from "react";
import "./ButtonDetailClass.css";

function ButtonCtg({ caption, buttonFn, isActive, width }) {
  const [isSlideBackground, setIsSlideBackground] = useState({});
  const widthFull = width ? "w-full" : "w-auto";

  useEffect(() => {
    if (isActive) {
      setIsSlideBackground({
        background: "linear-gradient(to right, #a88646 100%, white 50%)",
        border: "2px solid #a88646",
        backgroundSize: "200% 100%",
        backgroundPosition: "right bottom",
        color: "white",
      });
    } else {
      setIsSlideBackground({});
    }
  }, [isActive]);

  return (
    <button
      className={`btn-ctg py-3 lg:px-4 px-3 items-center gap-2 text-base lg:${widthFull} rounded-rounded32`}
      onClick={buttonFn}
      style={isSlideBackground}
    >
      {caption}
    </button>
  );
}

export default ButtonCtg;
