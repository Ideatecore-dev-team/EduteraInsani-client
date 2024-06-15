import React, { useState } from "react";
import "./ButtonCtg.css";

function ButtonCtg({ caption, buttonFn, active }) {
  const [isSlideBackground, setIsSlideBackground] = useState({});

  const handleStyle = function () {
    setIsSlideBackground({
      background: "linear-gradient(to right, #a88646 100%, white 50%)",
      border: "2px solid #a88646",
      backgroundSize: "200% 100%",
      backgroundPosition: "right bottom",
      color: "white",
      borderRadius: "32px",
    });
  };
  console.log(isSlideBackground);
  return (
    <button
      className={` btn-ctg py-3 px-4 items-center gap-2 text-base w-width-3`}
      onClick={() => {
        handleStyle();
        buttonFn();
      }}
      style={isSlideBackground}
      // onMouseLeave={() => setIsSlideBackground({})}
    >
      {caption}
    </button>
  );
}

export default ButtonCtg;
