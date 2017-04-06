// importing React
import React, { Component } from 'react';
// Welcome page - user not signed in
import Index from './Components/Auth/Index';
// importing header
import Header from './Components/Header';
// importing Home
import Home from './Components/Home';
// importing Add Game component
import AddGame from './Components/AddGame';

import {
  BrowserRouter,
  Route,
  Link,
  NavLink,
  Switch
} from 'react-router-dom';

// No Match Component
const NoMatch = () => (
  <section>
    <h1>That route does not exist</h1>
    <Link to="/">Return Home</Link>
  </section>
);


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

    return (
      <BrowserRouter>
          <Switch>
            {/* Root */}
            <Route exact path="/" component={Home} />
            {/* AddGame Route */}
            <Route exact path="/AddGame" component={AddGame} />
            {/* Catching incorrect routes */}
            <Route component={NoMatch} />
          </Switch>
      </BrowserRouter>
    )



    // Renders landing page when sign in is false
    /*if(!user.signedIn) {
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
    }*/
  }
}



export default App;
