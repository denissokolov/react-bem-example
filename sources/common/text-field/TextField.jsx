import React from "react";
import PropTypes from "prop-types";

import "./text-field.scss";

class TextField extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
  };

  static defaultProps = {
    type: "text",
  };

  onChange = (event) => {
    this.props.onChange(event.target.value);
  };

  render() {
    const { placeholder, type } = this.props;

    return (
      <input
        type={type}
        className="text-field"
        onChange={this.onChange}
        placeholder={placeholder}
      />
    )
  }
}

export default TextField;