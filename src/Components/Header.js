import React, {Component} from 'react';
import  {Link}  from 'react-router';
// import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'


/*const navbarInstance = (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Game Logger</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} >    <Link to="/"
            activeOnlyWhenExact
            activeClassName="underline">
            Home
          </Link></NavItem>
        <NavItem eventKey={2}>
            <Link to="/AddGame"
              activeOnlyWhenExact
              activeClassName="underline">
              Add Game
            </Link>
          </NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">About</NavItem>
        <NavItem eventKey={2} href="#">Contact</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
*/


// Header Component - nav bar
class Header extends Component {
  constructor(props) {
    super(props);


  }

  render() {
      const header = this.props;
    return(

    <div>
      
      {navbarInstance}
    </div>

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
