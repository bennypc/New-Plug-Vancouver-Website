import React from "react";
import { stack as Menu } from "react-burger-menu";
import "./burger.css";

const toggleMenu = ({ isOpen }) => {
  const menuWrap = document.querySelector(".bm-menu-wrap");
  isOpen
    ? menuWrap.setAttribute("aria-hidden", false)
    : menuWrap.setAttribute("aria-hidden", true);
};

const BurgerMenu = () => {
  return (
    <Menu elastic right noOverlay onStateChange={toggleMenu}>
      <a className="menu-item" href="/">
        HOME
      </a>
      <a className="menu-item" href="/#latest-articles">
        READ
      </a>
      <a className="menu-item" href="/">
        ABOUT
      </a>
    </Menu>
  );
};

export default BurgerMenu;
