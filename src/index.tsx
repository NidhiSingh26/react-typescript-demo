import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(  //function is used to create a root-level component that can be rendered into the DOM.
  document.getElementById('root') as HTMLElement  //is used to select an element from the DOM with the id "root".
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
