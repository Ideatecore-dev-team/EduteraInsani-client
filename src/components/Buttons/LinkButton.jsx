import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./ButtonLink.css";

function ButtonLink({ children, to, caption, border, width }) {
  const borderClass = border ? "border-class" : "no-border";
  const widthFull = width ? "btn-width-full" : "btn-width-normal";

  return (
    <Link
      to={to}
      className={`btn-link flex lg:py-3 lg:px-4 items-center gap-2 text-[1rem] lg:text-base px-2 py-3 ${borderClass} ${widthFull}`}
    >
      <p>{caption}</p>
      {children}
    </Link>
  );
}

ButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  border: PropTypes.bool, // Accepts a boolean to add a border
  children: PropTypes.node, // Accepts any valid React node
};

export default ButtonLink;
