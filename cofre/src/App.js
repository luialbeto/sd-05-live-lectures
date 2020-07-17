import React from 'react';
import './App.css';
import Cofre from './cofre';

function NewContent(props) {
return <p>Oi {props.name}</p>
}

function App() {
  return (
    <div className="App">
      <Cofre correctPassword="1234">

        Turma 5

        <img src="https://f.jwwb.nl/public/s/c/w/temp-mozdoqoyjvjdwsgkkoxn/treasure_chest_312572-2.jpg" alt="My awesome chest filled with gold" />

        <NewContent name="Marylange"/>
      </Cofre>
    </div>
    )
}

export default App;
