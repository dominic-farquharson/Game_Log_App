import React, {Component} from 'react';
import  {Link}  from 'react-router';

// Header Component - nav bar
class Header extends Component {
  constructor(props) {
    super(props);


  }

  render() {
      const header = this.props;
    return(
      <div id="header">
        <h1>{header.title}</h1>
      <Link to="/"
      activeOnlyWhenExact
      activeClassName="underline">
      Home
    </Link>

      <Link to="/AddGame"
      activeOnlyWhenExact
      activeClassName="underline">
      Add Game
      </Link>
      <hr />
      </div>
    )
  }
}

export default Header;
