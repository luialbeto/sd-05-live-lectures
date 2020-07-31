import React from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessCard from './BusinessCard';
import users from './data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardIndex: 1,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({ cardIndex: ( state.cardIndex + 1 )% users.length }));
  }



  render() {
    return(
      <div className="App">
      <BusinessCard user={users[this.state.cardIndex]}/>
      <button onClick={this.handleClick}>Next</button>
    </div>
    );
  }
}

export default App;
