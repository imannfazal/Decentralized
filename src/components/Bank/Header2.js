import React, { useState } from "react";
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";
import NavItem from "./NavItem";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Header2() {
  const [showNav, setShowNav] = useState(false);

  return ( 
    <nav className="md:flex justify-between items-center bg-blackbg sticky top-0 z-20 text-sm md:pr-9 pr-3">
      <div className="flex items-center justify-between">
        <a href="https://www.indexx.ai/">
          <img className="md:w-28 w-20 md:pl-9 pl-3" src={logo} alt="logo" />
        </a>

        {showNav ? (
          <HiOutlineMenuAlt3
            onClick={() => setShowNav(!showNav)}
            className="md:hidden block w-10 h-10 p-2 cursor-pointer stroke-whitebg"
          />
        ) : (
          <HiOutlineMenuAlt2
            onClick={() => setShowNav(!showNav)}
            className="md:hidden block w-10 h-10 p-2 cursor-pointer stroke-whitebg"
          />
        )}
      </div>

      <ul
        className={
          (showNav ? "left-0" : "-left-full") +
          " md:static fixed bottom-0 top-12 md:flex md:space-x-7 items-center md:bg-transparent bg-grey bg-opacity-90 md:w-auto w-10/12 md:text-unselected text-sm text-whitebg md:space-y-0 space-y-5 p-2 transition-left"
        }
      >
        <NavItem content="DASHBOARD" href="/*" />
        <NavItem content="MY PAGE" href="/MyPage" />
        <NavItem content="STAKE TO EARN" href="/Earn" />
        <NavItem content="BORROW" href="/Borrow" />
        <NavItem content="xASSET" href="/bASSET" />
        <NavItem content="GOVERN" href="/Govern" />
      </ul>
    </nav>
  );
}

export default Header2;