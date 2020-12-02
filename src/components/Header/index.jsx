import React from "react";
import PropTypes from "prop-types";

import "./Header.scss";

const Header = React.memo(({ title }) => {
  return (
    <div className="header">
      <div className="header__title">{title}</div>
    </div>
  );
});

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

Header.defaultProps = {
  title: "title",
};

export default Header;
