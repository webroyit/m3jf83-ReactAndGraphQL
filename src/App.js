import React, { Component } from 'react';
import './App.css';

import Signup from './components/Signup';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Signup />
          <Login />
        </header>
      </div>
    );
  }
}

export default App;
