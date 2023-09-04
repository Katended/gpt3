import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Feature from '../../components/feature/feature';
import './features.css';

const featuresData = [
  {
    title: 'Text',
    text: 'Text models are advanced language processing tools that can generate, classify, and summarize text with high levels of coherence and accuracy.',
  },
  {
    title: 'Image',
    text: 'Research on generative modeling for images has led to representation models like CLIP, which makes a map between text and images that an AI can read, and DALL-E, a tool for creating vivid images from text descriptions.',
  },
  {
    title: 'Audio',
    text: 'Research on applying AI to audio processing and audio generation has led to developments in automatic speech recognition and original musical compositions.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item) => (
        <Feature title={item.title} text={item.text} key={uuidv4()} />
      ))}
    </div>
  </div>
);

export default Features;
