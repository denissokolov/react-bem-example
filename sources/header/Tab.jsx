import React from "react";
import PropTypes from "prop-types";

class Tab extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
  };

  onClick = (event) => {
    event.preventDefault();
    const { onClick, index } = this.props;

    onClick(index);
  };

  render() {
    const { title, className } = this.props;

    return (
      <a
        className={className}
        onClick={this.onClick}
      >
        {title}
      </a>
    )
  }
}

export default Tab;