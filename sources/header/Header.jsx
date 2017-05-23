import React from "react";
import PropTypes from "prop-types";

import Logo from "../common/Logo";
import Tabs from "./Tabs";
import SearchForm from "./SearchForm";
import AuthForm from "./AuthForm";
import UserInfo from "./UserInfo";

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
      <div className="header__logo">
        <Logo big />
      </div>

      <div className="header__tabs">
        <Tabs items={tabs} active={1} />
      </div>

      <div className="header__search">
        <SearchForm />
      </div>

      <div className="header__auth">
        {isAuthorized ? <UserInfo /> : <AuthForm />}
      </div>
    </header>
  );
};

Header.propTypes = {
  isAuthorized: PropTypes.bool,
};

export default Header;