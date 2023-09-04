import React from 'react';
import {
  Footer, Blog, Possibility, Whatgpt3, Header, Features,
} from './containers';
import { Cta, Brand, NavBar } from './components';
import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <NavBar />
      <Header />
    </div>
    <Brand />
    <Whatgpt3 />
    <Features />
    <Possibility />
    <Cta />
    <Blog />
    <Footer />
  </div>
);

export default App;
