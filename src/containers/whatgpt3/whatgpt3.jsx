import React from 'react';
import './whatgpt3.css';
import Feature from '../../components/feature/feature';

const Whatgpt3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="whatgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT3?" text="GPT-3, which stands for Generative Pre-trained Transformer 3,is a state-of-the-art language processing AI model developed by OpenAI. It is the third iteration of the GPT series and is known for its remarkable language generation and understanding capabilities. GPT-3 is designed based on a transformer architecture, which is a type of neural network architecture specifically tailored for handling sequential data, such as text." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Text Generation" text="GPT-3 can generate human-like text for creative writing, storytelling, content creation, and more. It can write articles, poems, stories, and even dialogue for characters in a narrative." />
      <Feature title="Language Translation" text="GPT-3 can be used for translating text between different languages. While it might not be as accurate as specialized translation models, it can still provide decent translations." />
      <Feature title="Code Generation" text="GPT-3 can generate code snippets in various programming languages based on a description or problem statement. Its useful for tasks like automating repetitive coding tasks or generating examples of code." />
    </div>
  </div>
);

export default Whatgpt3;
