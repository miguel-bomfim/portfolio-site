import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import "./Menu.css";
import SocilaSection from "./SocialSection";
import useMobile from "../../hooks/useMobile";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Header: React.FC = () => {
  const { pathname } = useLocation();
  const isMobile = useMobile();

  return (
    <div className={classNames({ menuBarMobile: isMobile })}>
      {isMobile && (
        <div>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </div>
      )}
      {!isMobile && (
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
      )}
      <SocilaSection isMobile={isMobile} />
    </div>
  );
};

export default Header;
