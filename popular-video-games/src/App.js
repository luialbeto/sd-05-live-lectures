import React from 'react';
import './App.css';
import games from './data';
import VideoGameList from './VideoGameList';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <VideoGameList games={games}/>
      <Footer title="Made during live lecture" />
    </div>
  );
}

export default App;
