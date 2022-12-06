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
  isMobile?: boolean;
  handleDrawerClose?: React.MouseEventHandler<HTMLAnchorElement>;
}

const MenuItems: React.FC<MenuItemsProps> = ({
  pathname,
  isMobile,
  handleDrawerClose,
}) => {
  return (
    <ul className="navBarItems" aria-label="breadcrumb">
      <Link
        className={classNames("navBarItem", {
          navBarItemSelected: pathname === "/",
        })}
        to="/"
        onClick={handleDrawerClose}
      >
        Home
      </Link>
      {isMobile && <Divider sx={{ width: "50%" }} />}
      <Link
        className={classNames("navBarItem", {
          navBarItemSelected: pathname.includes("portfolio"),
        })}
        to="/portfolio"
        onClick={handleDrawerClose}
      >
        Portfólio
      </Link>
      {isMobile && <Divider sx={{ width: "75%" }} />}
      <Link
        className={classNames("navBarItem", {
          navBarItemSelected: pathname === "/about",
        })}
        to="/about"
        onClick={handleDrawerClose}
      >
        Sobre mim
      </Link>
      {isMobile && <Divider />}
    </ul>
  );
};

const Menu: React.FC = () => {
  const { pathname } = useLocation();
  const isMobile = useMobile();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection] = useState("");

    useEffect(() => {
      let lastScrollY = window.pageYOffset;

      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (
          direction !== scrollDirection &&
          (scrollY - lastScrollY > 3 || scrollY - lastScrollY < -3)
        ) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      };
    }, [scrollDirection]);

    return scrollDirection;
  };

  const scrollDirection = useScrollDirection();

  const drawerWidth = 240;

  return (
    <div
      className={classNames({
        menuBarMobile: isMobile,
        menuBarMobileDown: scrollDirection === "down",
      })}
    >
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
            PaperProps={{
              sx: {
                borderRight: 0,
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
            onClose={handleDrawerClose}
          >
            <div onClick={handleDrawerClose}>
              <IconButton sx={{ margin: "0.5em 0" }}>
                <ChevronLeftIcon fontSize="large" />
              </IconButton>
            </div>
            <Divider />
            <MenuItems
              pathname={pathname}
              isMobile={isMobile}
              handleDrawerClose={handleDrawerClose}
            />
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
