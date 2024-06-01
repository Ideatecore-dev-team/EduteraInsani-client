import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./ButtonLink.css";

function ButtonLink({ children, to, caption, border }) {
  const borderClass = border ? "border-class" : "no-border";

  return (
    <Link
      to={to}
      className={`btn-link flex py-3 px-4 items-center gap-2 text-base ${borderClass}`}
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

ButtonLink.defaultProps = {
  border: false,
};

export default ButtonLink;
