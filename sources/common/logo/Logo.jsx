import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./logo.scss";

const Logo = ({ big = false }) => (
  <div
    className={classNames("logo", {
      "logo--big": big,
    })}
  >
    LOGO
  </div>
);

Logo.propTypes = {
  big: PropTypes.bool,
};

export default Logo;