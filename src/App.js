import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Match, Miss } from 'react-router';
import Header from './Components/Header';
import AddGame from './Components/AddGame';
import Home from './Components/Home';
import ViewGame from './Components/ViewGame';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">

          <Match exactly pattern="/" component={Home} />
          <Match exactly pattern="/AddGame" component={AddGame} />
          <Match exactly pattern="/ViewGame" component={ViewGame} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
