import React from 'react';
import './article.css';
import PropTypes from 'prop-types';

const Article = ({ imgUrl, title }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <h3>{title}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
);

Article.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Article;
