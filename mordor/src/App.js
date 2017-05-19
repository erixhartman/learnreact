import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Mordor from './Mordor.js';


class App extends Component {
  render() {
    return (
      <div>
        <Mordor doesFrodoHaveTheOneRing="No! Sauren is defeated!" />
      </div>
    );
  }
}

export default App;
