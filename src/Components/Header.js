import React, {Component} from 'react';
import  {Link}  from 'react-router';

class Header extends Component {
  render() {
    return(
      <div>
      <div> Header is connected</div>
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
