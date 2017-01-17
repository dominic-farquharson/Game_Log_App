import React, {Component} from 'react';
import axios from 'axios';

class PrintGames extends Component {
  render(){
    return(
      <ul>
        <div>
          {this.props.gamesTitle}
        
      </div>
      </ul>
    )
  }
}


export default PrintGames;
