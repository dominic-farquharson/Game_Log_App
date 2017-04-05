import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from 'react-router-dom';
// React bootstrap
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
// // Add Game component
// import AddGame from './AddGame';


const NavbarInstance= (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Game Logger</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1}>
          <Link to="/AddGame">Add Game</Link>
        </NavItem>
        <NavItem eventKey={2} href="#">About</NavItem>
        <NavItem eventKey={3} href="#">Contact</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);



// Header Component - nav bar
class Header extends Component {
  constructor(props) {
    super(props);


  }

  render() {
      const header = this.props;
    return(
        <header>
         {NavbarInstance}
        </header>
    )
  }
}

{/*
<nav class="img-responsive">
  <h1>{header.title}</h1>
<Link to="/"
activeOnlyWhenExact
activeClassName="underline">
Home
</Link>  */}

{/* <Link to="/AddGame"
activeOnlyWhenExact
activeClassName="underline">
Add Game
</Link>
<hr />
</nav> */}

export default Header;
