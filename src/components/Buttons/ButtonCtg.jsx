import React from "react";
import "./ButtonCtg.css";

function ButtonCtg({ caption, buttonFn}) {
  return (
    <button
      className={"btn-ctg py-3 px-4 items-center gap-2 text-base w-width-3"}
      onClick={buttonFn} 
    >
      {caption}
    </button>
  );
}

export default ButtonCtg;
