import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './app';
import './index.css';
import Store from './redux/store';

// ReactDOM.render(<App/>, document.getElementById('root'))

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render( /*#__PURE__*/React.createElement(Provider, {
  store: Store
}, /*#__PURE__*/React.createElement(App, null)));