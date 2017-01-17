import React, {Component} from 'react';
import axios from 'axios';
import GamesListItem from './GamesListItem';
/*
Object.keys(this.state.games).map((gameId) => {
    return <li id={gameId} key={gameId}>
        {this.state.games[`${gameId}`]['title']}
        <br/> {< img src = {
            this.state.games[`${gameId}`]['url']
        } />}
        <br/> {/* View Button - sending key value as argument *///}
        // <button onClick={() => this.viewGame(data)}>View</button>
        // <br/> {/* Edit Button - sending key value as argument */}
        // <button onClick={() => this.editGame(data)}>Edit</button>
        // {/* Delete Button -sending key value as argument */}
        // <button onClick={() => this.deleteGame(data)}>Delete</button>
//    </li>
//})

class GamesList extends Component {
  constructor() {
    super();
    this.gameListItems = this.gameListItems.bind(this);
  }
  gameListItems() {
    const listItems = Object.keys(this.props.gameData).map((Id) => {
        return(

          <GamesListItem
            key={Id}
            gameId={Id}
            gameData={this.props.gameData}
            onGameUpdated={this.props.onGameUpdated}
            getGames={ ()=>this.props.getGames() }
            printGames= { ()=> this.props.printGames() }
          />


        )
    });
    return listItems;


  }

  render(){
    return(
      <ul id="gamesFeed">
        {this.gameListItems()}
      </ul>
    )
  }
}


export default GamesList;
