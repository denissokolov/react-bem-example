import React from "react";
import PropTypes from "prop-types";

const Button = ({ type = "button", text }) => (
  <button type={type} className="button">
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string
};

export default Button;