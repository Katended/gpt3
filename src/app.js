import React from 'react';
import { Footer,Blog,Possibility,Whatgpt3,Header, Features} from './containers'
import {Cta,Brand,NavBar} from './components'

const App = () => {
  return (
    <div>
      <div className="App">
        <div className="gradient__bg">
          <NavBar/>
          <Header/>
        </div>
        <Brand/>
        <Whatgpt3/>
        <Features/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
 
