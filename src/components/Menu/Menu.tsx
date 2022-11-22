import React from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import "./Menu.css";

const Header: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className="navBar">
      <ul className="navBarItems" aria-label="breadcrumb">
        <Link
          className={classNames("navBarItem", {
            navBarItemSelected: pathname === "/",
          })}
          to="/"
        >
          Home
        </Link>
        <Link
          className={classNames("navBarItem", {
            navBarItemSelected: pathname.includes("portfolio"),
          })}
          to="/portfolio"
        >
          Portfólio
        </Link>
        <Link
          className={classNames("navBarItem", {
            navBarItemSelected: pathname === "/about",
          })}
          to="/about"
        >
          Sobre mim
        </Link>
      </ul>
    </div>
  );
};

export default Header;
