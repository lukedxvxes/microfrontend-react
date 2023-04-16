import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app.jsx';

const mount = (el) => {
  ReactDOM.render(<App />, el);
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#marketing-dev-root');
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
