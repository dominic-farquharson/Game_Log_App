// importing React
import React, { Component } from 'react';
// Welcome page - user not signed in
import Index from './Components/Auth/Index';

// creating app Component
class App extends Component {
  constructor() {
    super();
    // setting initial state
    this.state = {
      // creating initial state for user object
      user: {
        // user not logged in
        signedIn: false,
        // initial email 
        email: '',
        // initial username
        username: '',
        // no games List data
        gamesList: {}
      }
    }

  }
  render() {
    // setting user state to a variable
    const user = this.state.user;
    // Renders landing page when sign in is false
    if(!user.signedIn) {
    return (

      <div className="App">

        <Index />

      </div>
     
    );
    }
   // renders when user signs in - will render Games List
    else {
      return (
        <div>User is signed In</div>
      )
    }
  }
}



export default App;
