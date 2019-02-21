import React, { Component } from 'react';
import './App.css';

import Signup from './components/Signup';
import Login from './components/Login';
import AddFood from './components/AddFood';
import FoodList from './components/FoodList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Signup />
          <Login />
          <AddFood />
          <FoodList />
        </header>
      </div>
    );
  }
}

export default App;
