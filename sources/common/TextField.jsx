import React from "react";
import PropTypes from "prop-types";

class TextField extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
  };

  onChange = (event) => {
    this.props.onChange(event.target.value);
  };

  render() {
    const { placeholder } = this.props;

    return (
      <input
        className="text-field"
        onChange={this.onChange}
        placeholder={placeholder}
      />
    )
  }
}

export default TextField;