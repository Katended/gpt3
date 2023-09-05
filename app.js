import React from 'react';
import Footer from './containers/footer/footer';
import Blog from './containers/blog/blog';
import Possibility from './containers/possibility/possibility';
import Whatgpt3 from './containers/whatgpt3/whatgpt3';
import Header from './containers/header/header';
import Features from './containers/features/features';
import NavBar from './components/navbar/navbar';
import Brand from './components/brand/brand';
import Cta from './components/cta/cta';
import './App.css';
const App = () => /*#__PURE__*/React.createElement("div", {
  className: "App"
}, /*#__PURE__*/React.createElement("div", {
  className: "gradient__bg"
}, /*#__PURE__*/React.createElement(NavBar, null), /*#__PURE__*/React.createElement(Header, null)), /*#__PURE__*/React.createElement(Brand, null), /*#__PURE__*/React.createElement(Whatgpt3, null), /*#__PURE__*/React.createElement(Features, null), /*#__PURE__*/React.createElement(Possibility, null), /*#__PURE__*/React.createElement(Cta, null), /*#__PURE__*/React.createElement(Blog, null), /*#__PURE__*/React.createElement(Footer, null));
export default App;