import React from "react";
import {createRoot } from "react-dom/client"
import App from './app';
import './index.css';

// ReactDOM.render(<App/>, document.getElementById('root'))

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(   
      <App />  
  );