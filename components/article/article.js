import React from 'react';
import './article.css';
import PropTypes from 'prop-types';
const Article = ({
  imgUrl,
  title
}) => /*#__PURE__*/React.createElement("div", {
  className: "gpt3__blog-container_article"
}, /*#__PURE__*/React.createElement("div", {
  className: "gpt3__blog-container_article-image"
}, /*#__PURE__*/React.createElement("img", {
  src: imgUrl,
  alt: "blog_image"
})), /*#__PURE__*/React.createElement("div", {
  className: "gpt3__blog-container_article-content"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, title)), /*#__PURE__*/React.createElement("p", null, "Read Full Article")));
Article.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
export default Article;