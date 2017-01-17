import React, {Component} from 'react';
import axios from 'axios';
import GamesListItem from './GamesListItem';
import GameStats from './GameStats';


import Header from './Header';
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
      view:false,
      key:'',
      gameData:'',
      stats:''
    }
    this.gameListItems = this.gameListItems.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.grabKey = this.grabKey.bind(this);
    this.toggleView = this.toggleView.bind(this);
    this.fetchGameData = this.fetchGameData.bind(this);
    this.printStats = this.printStats.bind(this);
  }
  gameListItems() {
          // if (this.state.view === false) {
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
            toggleView={ ()=> this.toggleView(Id)}
            view={this.state.view}
            grabKey={()=>this.grabKey()}
          />


        )
    })
    return listItems;
    // }
    // else
    //   return (
    //     <div>Hello
    //     <button onClick={ ()=>{this.toggleView()}}>Return Home</button>
    //     </div>
    //   )


  }

  grabKey(key) {
    this.setState({key:key})
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
  toggleView(key) {
    // setting key value to the state to have access to it in render
    this.setState({key:key});
    this.fetchGameData(key);
    // console.log(this.state.key)
    console.log(key);
    if(this.state.view === true)
    this.setState({view:false})
    else {
      this.setState({view:true})
    }
  }

  fetchGameData(key) {
    console.log('fetch key',key);
    console.log('Fetch Stat has run');
    const fetchUrl = `https://game-log-app.firebaseio.com/${key}/.json`;
    axios.get(fetchUrl)
    .then( (response)=> {
      console.log('fetch has run');
      console.log('response',response.data);
      this.setState({gameData:response.data});
      console.log('game data state',this.state.gameData)
    })
    .catch( (error)=> {
      console.log(error)
    })

    return (
      console.log('key',key),
        console.log('titles',this.state.gameData)
    )


  }

  // fetching Stats from database
  printStats(key) {
    const fetchUrl = `https://game-log-app.firebaseio.com/${key}/stats/.json`;
    console.log('stats key,',key);
    axios.get(fetchUrl)
    .then( (response)=> {
      console.log('fetch has run');
      console.log('response',response.data);
      this.setState({stats:response.data});
      console.log('game stats state',this.state.stats)
    })
    .catch( (error)=> {
      console.log(error)
    })


        const listItems = Object.keys(this.state.stats).map((Id) => {

            return(
              <li key={Id}>
              <GameStats
                statTitle={this.state.stats[Id]['title']}
                statDescription = {this.state.stats[Id]['description']}
              />
              </li>


            )
        })
        return listItems;

      }


  render(){

      if(this.state.view==false) {
        return(
      <ul id="gamesFeed">

        {this.gameListItems()}
        </ul> ) }


        else {
        return (
          <div>
                {/* View Button - runs when view state is true */}
                <h1>{this.state.gameData['title']}</h1>
                <img src={this.state.gameData['url']} />
                <button>Add Stat</button>

                <button onClick={()=> this.toggleView()}>Return</button>
                {/* Printing games from database */}
                {this.printStats(this.state.key)}

        </div>
      )
}

  }
}


export default GamesList;
