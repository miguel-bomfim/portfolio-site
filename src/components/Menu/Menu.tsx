import React from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import "./Menu.css";

const Header: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className="navBar">
      <ul
        style={{
          color: "black",
          fontSize: "18px",
          fontWeight: "800",
          fontFamily: "Plus Jakarta Sans, sans-serif",
        }}
        aria-label="breadcrumb"
      >
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
          Portfolio
        </Link>
        <Link
          className={classNames("navBarItem", {
            navBarItemSelected: pathname === "/about",
          })}
          to="/about"
        >
          Sobre mim
        </Link>
        <Link
          className={classNames("navBarItem", {
            navBarItemSelected: pathname === "/contact",
          })}
          to="/contact"
        >
          Contato
        </Link>
      </ul>
    </div>
  );
};

export default Header;
