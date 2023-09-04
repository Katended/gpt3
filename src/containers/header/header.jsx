import React from 'react';
import './header.css';
import ai from '../../assets/ai.png';
import Chatapp from '../chatapp/chatapp';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">

      <div className="gpt3__header-content-chatapp">
        <Chatapp />
      </div>
      <p>
        Hugging Face is a company and open-source community that specializes
        in Natural
        Language Processing (NLP) and provides a wide range of tools,
        libraries, and pre-trained models for working with text data
        and building AI applications.
        Their primary focus is on making NLP models and techniques
        accessible to developers and researchers.
      </p>
    </div>
    <div className="gpt3__header-image">
      <img src={ai} alt="ai" />
    </div>
  </div>

);

export default Header;
