import React from "react";
import Header from "./header/Header";

export default () => (
  <div className="layout">
    <div className="layout__header">
      <Header/>
    </div>

    <div className="layout__content"></div>
    <div className="layout__footer"></div>
  </div>
);