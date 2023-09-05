import React from 'react';
import PropTypes from 'prop-types';
import './feature.css';
const Feature = ({
  title,
  text
}) => /*#__PURE__*/React.createElement("div", {
  className: "gpt3__features-container__feature"
}, /*#__PURE__*/React.createElement("div", {
  className: "gpt3__features-container__feature-title"
}, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("h1", null, title)), /*#__PURE__*/React.createElement("div", {
  className: "gpt3__features-container_feature-text"
}, /*#__PURE__*/React.createElement("p", null, text)));
Feature.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
export default Feature;