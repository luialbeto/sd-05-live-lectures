import React from 'react';
import { Provider } from './components/EnterpriseContext'
import Panel from './components/Panel.js';

function App() {
  return (
    <Provider>
      <Panel />
    </Provider>
    );
}

export default App;
