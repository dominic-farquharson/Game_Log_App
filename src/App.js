import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Match, Miss } from 'react-router';
import Header from './Components/Header';
import AddGame from './Components/AddGame';
import Home from './Components/Home';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">

          <Match exactly pattern="/" component={Home} />
          <Match exactly pattern="/AddGame" component={AddGame} />
          
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
