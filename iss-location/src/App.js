import React from 'react';
import './App.css';
import ISSLocation from './components/ISSLocation';
import ISSContext from './context/ISSContext';
import getCurrentISSLocation from './services/issAPI';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      error: null,
      isFetching: false,
      latitude: -19.9410656,
      longitude: -43.9333033,
    }

    
  }

  render() {
    return (
      <div className="App">
        <h1>International Space Station Location Tracker</h1>
        <ISSLocation />
      </div>
    );
  }
}

export default App;
