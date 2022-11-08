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
      <a className="menu-item" href="#latest-articles">
        READ
      </a>
      <a className="menu-item" href="#events">
        EXPERIENCE
      </a>
      <a className="menu-item" href="#media">
        WATCH
      </a>
      <a className="menu-item" href="/">
        ARCHIVES
      </a>
      <a className="menu-item" href="/">
        ABOUT
      </a>
      <a className="menu-item" href="/">
        PEOPLE
      </a>
      <a className="menu-item" href="/">
        CONTACT
      </a>

    </Menu>
  );
};

export default BurgerMenu;
