import React from 'react';
import axios from 'axios';

class GamesListItem extends React.Component {

  // Delete Game from database
  deleteGame(key) {
      // grabbing prompt value
      const input = prompt('Would you like to delete this Game? (Y/N)', 'Type Y or N');
      // Item deleted if yes
      if (input == 'Y') {
          const url = `https://game-log-app.firebaseio.com/${key}/.json`;
          axios.delete(url).then((response) => {
              alert('Game has been deleted');
              // Updating state, by performing another get request
              this.props.getGames();
              // printing out games based on updated State
              this.props.printGames();

          }).catch((error) => console.log(error)// Item not deleted if no
          );
      } else {
          alert('It will not be deleted');
      }

  }


  render() {
    const gameId=this.props.gameId;
    return (

      <li id={gameId} key={gameId}>
        {this.props.gameData[gameId]['title']}
        <br/>
        {<img src={this.props.gameData[gameId]['url']} />}
        {/* View Button - sending key value as argument */}
       <button onClick={() => this.viewGame(gameId)}>View</button>
        <br/> {/* Edit Button - sending key value as argument */}
        <button onClick={() => this.editGame(gameId)}>Edit</button>
       {/* Delete Button -sending key value as argument */}
        <button onClick={()=> this.deleteGame(gameId)}>Delete</button>
      </li>

    )
  }
}

export default GamesListItem;
