import React, { useEffect, useState } from "react";
import "./ButtonCtg.css";

function ButtonCtg({ caption, buttonFn, isActive }) {
  const [isSlideBackground, setIsSlideBackground] = useState({});

  useEffect(() => {
    if (isActive) {
      setIsSlideBackground({
        background: "linear-gradient(to right, #a88646 100%, white 50%)",
        border: "2px solid #a88646",
        backgroundSize: "200% 100%",
        backgroundPosition: "right bottom",
        color: "white",
        borderRadius: "32px",
      });
    } else {
      setIsSlideBackground({});
    }
  }, [isActive]);

  return (
    <button
      className={`btn-ctg py-3 px-4 items-center gap-2 text-base w-width-3 xs:w-full`}
      onClick={buttonFn}
      style={isSlideBackground}
    >
      {caption}
    </button>
  );
}

export default ButtonCtg;
