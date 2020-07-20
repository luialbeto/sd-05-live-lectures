import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.counter = 0;
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.setState({ date: new Date() }), 1000);
  }

  componentWillUnmount() {
    console.log("Componente mãe parou de chamar o componente filho");
    console.log("Logo vamos desligar o setInterval");
    clearInterval(this.timerID);
  }
  
  render() {
    this.counter += 1;
    console.log(this.counter);
    return (
      <div>
        <h1>Relógio</h1>
        <h2>Agora são {this.state.date.toLocaleTimeString()}.</h2>
        <button onClick={this.props.turnClockOff}>Desligar Relógio</button>
      </div>
    );
  }
}

export default Clock;

/*
  setInterval(
    () => this.setState({ date: new Date() }),
    1000
  )

*/