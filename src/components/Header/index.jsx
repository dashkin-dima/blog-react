import React from "react";

import "./Header.scss";

const Header = ({ title }) => {
  return (
    <div className="header">
      <div className="header__title">{title}</div>
    </div>
  );
};

export default Header;
