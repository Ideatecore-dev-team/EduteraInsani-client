import React, { useEffect, useState } from "react";
import "./ButtonDetailClass.css";

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
      });
    } else {
      setIsSlideBackground({});
    }
  }, [isActive]);

  return (
    <button
      className={`btn-ctg py-3 lg:px-4 px-3 items-center gap-2 text-base rounded-rounded32`}
      onClick={buttonFn}
      style={isSlideBackground}
    >
      {caption}
    </button>
  );
}

export default ButtonCtg;
