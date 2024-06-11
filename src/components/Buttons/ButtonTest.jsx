import React from "react";
import "./ButtonTest.css";

function ButtonTest({ caption, buttonFn }) {
  return (
    // <button>Test</button>
    <button
      className="btn-ctg py-3 px-4 items-center gap-2 text-base w-width-3"
      onClick={buttonFn}
    >
      {caption}
    </button>
  );
}

export default ButtonTest;
