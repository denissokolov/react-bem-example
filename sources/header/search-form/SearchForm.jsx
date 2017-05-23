import React from "react";
import TextField from "../../common/text-field/TextField";
import Button from "../../common/button/Button";

import "./search-form.scss";

class SearchForm extends React.Component {
  state = {
    value: "",
  };

  onFieldChange = (value) => {
    this.setState({ value })
  };

  onSubmit = (event) => {
    event.preventDefault();

    const { value } = this.state;
    if (value) {
      console.log(`Search: ${value}`);
    }
  };

  render() {
    return (
      <form className="search-form" onSubmit={this.onSubmit}>
        <div className="search-form__field">
          <TextField onChange={this.onFieldChange} />
        </div>

        <div className="search-form__submit">
          <Button text="Search" type="submit"/>
        </div>
      </form>
    )
  }
}

export default SearchForm;