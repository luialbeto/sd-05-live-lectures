import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//    <div className="App">
//      {element2}
//      <h1>Hello World</h1>
//      {element1}
//    </div>
//   );
// }

const MyVariableName = (name) => {
return (<h1>My favorite variable name is {name}</h1>)
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        {MyVariableName('variavelLegal')}
      </div>
    )
  }
}

// const element1 = (
//   <h1 className="greeting">
//     Hello, World!
//   </h1>
// )

// const element2 = React.createElement(
//   'h1',
//   { className: "greeting" },
//   'Hello, World!'
// )

export default App;
