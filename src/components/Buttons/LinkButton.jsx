import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./ButtonLink.css";

function ButtonLink({
  children,
  to,
  caption,
  border,
  width,
  shadow,
  onClick,
  icon,
}) {
  const borderClass = border ? "border-class" : "no-border";
  const widthFull = width ? "btn-width-full" : "btn-width-normal";
  const shadowButton = shadow ? "shadow-lg shadow-zinc-500" : "shadow-none";

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`btn-link flex lg:py-3 lg:px-4 items-center gap-2 lg:text-base px-2 py-3 ${borderClass} ${widthFull} ${shadowButton}`}
    >
      {icon && <img src={icon} alt="icon" className="icon-class" />}
      <p>{caption}</p>
      {children}
    </Link>
  );
}

ButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  border: PropTypes.bool,
  width: PropTypes.bool,
  shadow: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
  icon: PropTypes.string, // Updated to accept a string for the image source
};

export default ButtonLink;
