import React from 'react';
import './App.css';
import Clock from './Clock';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showClock: true };
    this.turnClockOff = this.turnClockOff.bind(this);
  }

  turnClockOff() {
    this.setState({ showClock: false });
  }


  render() {
    console.log("Render do componente mãe")
    return (
      <div className="App">
        <header className="App-header">
          {this.state.showClock && <Clock turnClockOff={this.turnClockOff} />}
        </header>
      </div>
    );
  }
}

export default App;
