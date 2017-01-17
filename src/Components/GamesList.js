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
      stats:'',
      editStat:false,
      statDescription:'Enter a Description',
      statTitle:'Enter a title'
    }
    this.gameListItems = this.gameListItems.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.grabKey = this.grabKey.bind(this);
    this.toggleView = this.toggleView.bind(this);
    this.fetchGameData = this.fetchGameData.bind(this);
    this.printStats = this.printStats.bind(this);
    this.postStat = this.postStat.bind(this);
    this.grabInputTitle = this.grabInputTitle.bind(this);
    this.grabInputDescription = this.grabInputDescription.bind(this);
    this.deleteStat = this.deleteStat.bind(this);
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

  // function to handle input field changes, setting input as state
  grabInputTitle(e) {
      this.setState({statTitle: e.target.value});
  }
  // function to grab url from url input field
  grabInputDescription(e) {
      this.setState({statDescription: e.target.value});
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

  toggleEditStat() {
    if(this.state.editStat == null) {
      this.setState({editStat:false})
    }
    if(this.state.editStat=== true) {
    this.setState({editStat:false})}
    else {
      this.setState({editStat:true})
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

        if(this.state.stats ===null) {
          return;
        }
        const listItems = Object.keys(this.state.stats).map((Id) => {

            return(
              <li key={Id}>
              <GameStats
                statTitle={this.state.stats[Id]['title']}
                statDescription = {this.state.stats[Id]['description']}
                deleteStats={ ()=> this.deleteStat(Id)}
              />
              </li>


            )
        })
        return listItems;

      }

      // function to post stat to database - post request
      postStat(key) {
        const inputTitle = this.state.statTitle;
        const description= this.state.statDescription;
        const postUrl = `https://game-log-app.firebaseio.com/${key}/stats/.json`;
        console.log('key', key);
          axios.post(postUrl, {title:inputTitle, description:description})
          .then( (response) => {
            console.log(response.data)
            console.log('Success!');
            this.setState({editStat:false});
            this.printStats(key);

          })
          .catch( (error) => {
            console.log(error)
          })

      }

      deleteStat(key) {
        console.log('delete',key);
        console.log(this.state.game);
            // grabbing prompt value
            const input = prompt('Would you like to delete this Stat? (Y/N)', 'Type Y or N');
            // Item deleted if yes
            if (input == 'Y') {
                const url = `https://game-log-app.firebaseio.com/${this.state.key}/stats/${key}/.json`;
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



  render(){

      if(this.state.view==false) {
        return(
      <ul id="gamesFeed">

        {this.gameListItems()}
        </ul> ) }


        else {
          if(this.state.editStat ===false) {
        return (
          <div>
                {/* View Button - runs when view state is true */}
                <h1>{this.state.gameData['title']}</h1>
                <img src={this.state.gameData['url']} />
                <br />
                <button onClick={ ()=> this.toggleEditStat()}>Add Stat</button>

                <button onClick={()=> this.toggleView()}>Return</button>
                {/* Printing games from database */}
                {this.printStats(this.state.key)}

        </div>
      )
    }
    else {
      return (
        <div>
        <h1>Add A Stat</h1>
        <input placeholder={this.state.statTitle} onChange={this.grabInputTitle}/>
        <input placeholder={this.state.statDescription} onChange={this.grabInputDescription}/>
        <button onClick={ ()=> this.postStat(this.state.key)}>Submit Stat</button>
        <button onClick={ ()=>this.toggleEditStat()}>Cancel</button>
        </div>
      )
    }
}

  }
}


export default GamesList;
