import React from 'react';
import logo from './logo.svg';
import './App.css';
import colors from './data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {filter: 'all'};
  }

  setFilterValue = event => {
    this.setState({
      filter: event.target.value === '' ? 'all' : event.target.value
    })
    // console.log(event.target.value)
  }

  render() {
    return (
      <div className="App">
      <div>
        <input onChange={this.setFilterValue} type="text"/>
      </div>
      {colors
        .filter(({color}) => this.state.filter === 'all' ? true : color.includes(this.state.filter))
        .map(({color, value}) => (
        <li key={value}>
          {color} coded as {value}
        </li>
      ))}
    </div>
    );
  }
}

export default App;
