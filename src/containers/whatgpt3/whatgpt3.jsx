import React from 'react'
import './whatgpt3.css'
import Feature from '../../components/feature/feature'

const Whatgpt3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id="gpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT3?" text="GPT-3's versatility allows it to be used for a wide range of applications across various domains. Here are some examples of what can be built using GPT-3"/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">       
        <Feature title='Text Generation' text='GPT-3 can generate human-like text for creative writing, storytelling, content creation, and more. It can write articles, poems, stories, and even dialogue for characters in a narrative.'/>
        <Feature title='Language Translation' text='GPT-3 can be used for translating text between different languages. While it might not be as accurate as specialized translation models, it can still provide decent translations.'/>
        <Feature title='Code Generation' text='GPT-3 can generate code snippets in various programming languages based on a description or problem statement. Its useful for tasks like automating repetitive coding tasks or generating examples of code.'/>
      </div>
    </div>
  )
}

export default Whatgpt3