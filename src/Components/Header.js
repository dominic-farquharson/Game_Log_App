import React, {Component} from 'react';
import  {Link}  from 'react-router';

// Header Component
class Header extends Component {
  constructor(props) {
    super(props);


  }

  render() {
      const header = this.props;
    return(
      <div>
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
      
      </div>
    )
  }
}

export default Header;
