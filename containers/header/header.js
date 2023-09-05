import React from 'react';
import './header.css';
import ai from '../../assets/ai.png';
import Chatapp from '../chatapp/chatapp';
const Header = () => /*#__PURE__*/React.createElement("div", {
  className: "gpt3__header section__padding",
  id: "home"
}, /*#__PURE__*/React.createElement("div", {
  className: "gpt3__header-content"
}, /*#__PURE__*/React.createElement("div", {
  className: "gpt3__header-content-chatapp"
}, /*#__PURE__*/React.createElement(Chatapp, null)), /*#__PURE__*/React.createElement("p", null, "Hugging Face is a company and open-source community that specializes in Natural Language Processing (NLP) and provides a wide range of tools, libraries, and pre-trained models for working with text data and building AI applications. Their primary focus is on making NLP models and techniques accessible to developers and researchers.")), /*#__PURE__*/React.createElement("div", {
  className: "gpt3__header-image"
}, /*#__PURE__*/React.createElement("img", {
  src: ai,
  alt: "ai"
})));
export default Header;