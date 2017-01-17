import React, {Component} from 'react';
import axios from 'axios';

class PrintGames extends Component {
  render(){
    return(
      <ul>{this.props.games}</ul>
    )
  }
}


export default PrintGames;
