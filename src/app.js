import React from 'react';
import
Footer
  from './containers/footer/footer';
import
Blog
  from './containers/blog/blog';
import
Possibility
  from './containers/possibility/possibility';
import
Whatgpt3
  from './containers/whatgpt3/whatgpt3';
import
Header
  from './containers/header/header';
import
Features
  from './containers/features/features';
import NavBar from './components/navbar/navbar';
import Brand from './components/brand/brand';
import Cta from './components/cta/cta';
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
