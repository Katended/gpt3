import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';
const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const Menu = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: "#home"
  }, "Home")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: "#whatgpt3"
  }, "What is GPT?")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: "#possibility"
  }, "Open AI")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: "#features"
  }, "Case Studies")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: "#blog"
  }, "Library")));
  return /*#__PURE__*/React.createElement("div", {
    className: "gpt3__navbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gpt3__navbar_links"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gpt3__navbar_links_logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "logo"
  })), /*#__PURE__*/React.createElement("div", {
    className: "gpt3__navbar-links_container"
  }, /*#__PURE__*/React.createElement(Menu, null))), /*#__PURE__*/React.createElement("div", {
    className: "gpt3__navbar-sign"
  }, /*#__PURE__*/React.createElement("p", null, "Sign in"), /*#__PURE__*/React.createElement("button", {
    type: "button"
  }, "Sign up")), /*#__PURE__*/React.createElement("div", {
    className: "gpt3__navbar-menu"
  }, toggleMenu ? /*#__PURE__*/React.createElement(RiCloseLine, {
    color: "#FFF",
    size: 27,
    onClick: () => setToggleMenu(false)
  }) : /*#__PURE__*/React.createElement(RiMenu3Line, {
    color: "#FFF",
    size: 27,
    onClick: () => setToggleMenu(true)
  }), toggleMenu && /*#__PURE__*/React.createElement("div", {
    className: "gpt3__navbar-menu_container scale-up-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gpt3__navbar-menu_container_links"
  }, /*#__PURE__*/React.createElement(Menu, null), /*#__PURE__*/React.createElement("div", {
    className: "gpt3__navbar-menu_container-links-sign"
  }, /*#__PURE__*/React.createElement("p", null, "Sign in"), /*#__PURE__*/React.createElement("button", {
    type: "button"
  }, "Sign up"))))));
};
export default NavBar;