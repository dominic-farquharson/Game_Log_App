import React, {Component} from 'react';
import axios from 'axios';

class PrintGames extends Component {
  render(){
    return(
      <ul id="gamesFeed">
        <div>
          {this.props.gamesTitle}

      </div>
      </ul>
    )
  }
}


export default PrintGames;
