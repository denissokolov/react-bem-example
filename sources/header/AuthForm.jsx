import React from "react";

import TextField from "../common/TextField";
import Button from "../common/Button";

class AuthForm extends React.Component {
  state = {
    login: "",
    password: "",
  };

  onLoginChange = (value) => {
    this.setState({ login: value })
  };

  onPasswordChange = (value) => {
    this.setState({ password: value })
  };

  onSubmit = (event) => {
    event.preventDefault();

    const { login, password } = this.state;
    if (login && password) {
      console.log(`Auth: ${login} ${password}`);
    }
  };

  render() {
    return (
      <form className="auth-form" onSubmit={this.onSubmit}>
        <div className="auth-form__field">
          <TextField onChange={this.onLoginChange} />
        </div>

        <div className="auth-form__field">
          <TextField onChange={this.onPasswordChange} />
        </div>

        <div className="auth-form__submit">
          <Button text="auth" type="submit"/>
        </div>
      </form>
    )
  }
}

export default AuthForm;