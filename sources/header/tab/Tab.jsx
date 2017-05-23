import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./tab.scss";

class Tab extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    active: PropTypes.bool,
  };

  onClick = (event) => {
    event.preventDefault();
    const { onClick, index } = this.props;

    onClick(index);
  };

  render() {
    const { title, active } = this.props;

    return (
      <a
        className={classNames("tab", { "tab--active": active })}
        onClick={this.onClick}
      >
        {title}
      </a>
    )
  }
}

export default Tab;