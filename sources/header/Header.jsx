import React from "react";
import PropTypes from "prop-types";

import Logo from "../common/logo/Logo";
import Tabs from "./tabs/Tabs";
import SearchForm from "./search-form/SearchForm";
import AuthForm from "./auth-form/AuthForm";
import UserInfo from "./user-info/UserInfo";

import "./header.scss";

const Header = ({ isAuthorized = false }) => {
  const tabs = [{
    title: "Tab 1",
    index: 1,
  }, {
    title: "Tab 2",
    index: 2,
  }, {
    title: "Tab 3",
    index: 3,
  }, {
    title: "Tab 4",
    index: 4,
  }];

  return (
    <header className="header">
      <Tabs items={tabs} active={1} />

      <div className="header__content">
        <div className="header__logo">
          <Logo big />
        </div>

        <div className="header__center">
          <div className="header__search">
            <SearchForm />
          </div>
        </div>

        <div className="header__auth">
          {isAuthorized ? <UserInfo /> : <AuthForm />}
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  isAuthorized: PropTypes.bool,
};

export default Header;