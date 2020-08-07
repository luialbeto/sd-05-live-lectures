import React from 'react';
import { Provider } from 'react-redux';

import Sidebar from './components/Sidebar';
import Player from './components/Player';
import store from './store';

import categories from './data';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [...categories]
    }
  }
  render() {
    return (
      <div>
        <Provider store={store}>
          <Player />
          <Sidebar />
        </Provider>
      </div>
    );
  }
}

export default App;
