import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Logo = ({ big = false }) => (
  <span className={classNames("logo", {
    "logo--big": big,
  })} />
);

Logo.propTypes = {
  big: PropTypes.bool,
};

export default Logo;