import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'


const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
  Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>GPT-3's versatility allows it to be used for a wide range of applications across various domains. Here are some examples of what can be built using GPT-3:</p>
          <div className='gpt3__header-content__input'>
            <input type='email' placeholder="email"/>
            <button type='button'>Get Started</button>
          </div>
         <div className='gtp3__header-content__people'>
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
         </div>        
        </div>
        <div class="gpt3__header-image">
          <img src={ai} alt="ai" />
         </div>
      </div>    
  
  )
}

export default Header
