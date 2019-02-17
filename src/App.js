import React, { Component } from 'react';
import './App.css';

import Signup from './components/Signup';
import Login from './components/Login';
import AddFood from './components/AddFood';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Signup />
          <Login />
          <AddFood />
        </header>
      </div>
    );
  }
}

export default App;
