import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import "./Menu.css";
import SocilaSection from "./SocialSection";
import useMobile from "../../hooks/useMobile";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";

import Divider from "@mui/material/Divider";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

interface MenuItemsProps {
  pathname: string;
}

const MenuItems: React.FC<MenuItemsProps> = ({ pathname }) => {
  return (
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
  );
};

const Menu: React.FC = () => {
  const { pathname } = useLocation();
  const isMobile = useMobile();
  const [open, setOpen] = useState(false);

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos && isMobile) {
      document.getElementById("menuBar")!.style.top = "0";
    } else {
      document.getElementById("menuBar")!.style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  };

  useEffect(() => {
    handleDrawerClose();
  }, [pathname]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const drawerWidth = 240;

  return (
    <div id="menuBar" className={classNames({ menuBarMobile: isMobile })}>
      {isMobile && (
        <div>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
            onClose={handleDrawerClose}
          >
            <div>
              <IconButton
                sx={{ margin: "0.5em 0" }}
                onClick={handleDrawerClose}
              >
                <ChevronLeftIcon fontSize="large" />
              </IconButton>
            </div>
            <Divider />
            <MenuItems pathname={pathname} />
          </Drawer>
        </div>
      )}
      {!isMobile && (
        <div className="navBar">
          <MenuItems pathname={pathname} />
        </div>
      )}
      <SocilaSection isMobile={isMobile} />
    </div>
  );
};

export default Menu;
