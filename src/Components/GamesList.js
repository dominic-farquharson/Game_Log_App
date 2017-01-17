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
        // <button onClick={() => this.toggleEdit(data)}>Edit</button>
        // {/* Delete Button -sending key value as argument */}
        // <button onClick={() => this.deleteGame(data)}>Delete</button>
//    </li>
//})

class GamesList extends Component {
  constructor() {
    super();
    this.state = {
      edit:false,
      view:false
    }
    this.gameListItems = this.gameListItems.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
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
            edit = {this.state.edit}
            toggleEdit={ () => this.toggleEdit()}
          />


        )
    });
    return listItems;


  }
  // setting state of edit to true - rename to toggle edit
  toggleEdit() {
    if(this.state.edit === true)
    this.setState({edit:false})
    else {
      this.setState({edit:true})
    }
  }

  // setting state of view to true 

  render(){
    return(
      <ul id="gamesFeed">
        {this.gameListItems()}
      </ul>
    )
  }
}


export default GamesList;
