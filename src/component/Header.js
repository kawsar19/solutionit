import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content deskmenu">
        <div className="header__left">
          <Link to="/">
            <figure className="logo">
              <img src="/assets/images/logo.svg" alt="" />
            </figure>
          </Link>
        </div>

        <div className="header__right">
          <div className="menu">
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">SERVICES</Link>
            <Link to="/friends">PORTFOLIO</Link>
            <Link to="/posts">CONTACT US</Link>
          </div>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
