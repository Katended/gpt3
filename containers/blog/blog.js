import React from 'react';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';
import { Article } from '../../components';
const Blog = () => /*#__PURE__*/React.createElement("div", {
  className: "gpt3__blog section__padding",
  id: "blog"
}, /*#__PURE__*/React.createElement("div", {
  className: "gpt3__blog-heading"
}, /*#__PURE__*/React.createElement("h1", {
  className: "gradient__text"
}, "A lot is happening,", /*#__PURE__*/React.createElement("br", null), ' ', "We are blogging about it.")), /*#__PURE__*/React.createElement("div", {
  className: "gpt3__blog-container"
}, /*#__PURE__*/React.createElement("div", {
  className: "gpt3__blog-container_groupA"
}, /*#__PURE__*/React.createElement(Article, {
  imgUrl: blog01,
  date: "Sep 26, 2021",
  title: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
})), /*#__PURE__*/React.createElement("div", {
  className: "gpt3__blog-container_groupB"
}, /*#__PURE__*/React.createElement(Article, {
  imgUrl: blog02,
  title: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
}), /*#__PURE__*/React.createElement(Article, {
  imgUrl: blog03,
  title: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
}), /*#__PURE__*/React.createElement(Article, {
  imgUrl: blog04,
  title: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
}), /*#__PURE__*/React.createElement(Article, {
  imgUrl: blog05,
  title: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
}))));
export default Blog;