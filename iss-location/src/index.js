import React from 'react';
import ReactDOM from 'react-dom';
import Provider from './context/Provider';

import './index.css';
import App from './App';
import store from './store';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>, document.getElementById('root'),
);
