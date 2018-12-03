import React, { Component } from 'react';
import Counter from './components/002-rcc/counter'
import NewLog from './components/002-rcc/newlog'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Counter />
      <NewLog />
      </div>
    );
  }
}

export default App;
