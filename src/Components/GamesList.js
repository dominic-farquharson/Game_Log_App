import React, {Component} from 'react';
import axios from 'axios';
import GamesListItem from './GamesListItem';
import GameStats from './GameStats';
import Header from './Header';

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
    this.toggleView = this.toggleView.bind(this);
    this.fetchGameData = this.fetchGameData.bind(this);
    this.printStats = this.printStats.bind(this);
    this.postStat = this.postStat.bind(this);
    this.grabInputTitle = this.grabInputTitle.bind(this);
    this.grabInputDescription = this.grabInputDescription.bind(this);
    this.deleteStat = this.deleteStat.bind(this);
  }
  componentDidMount() {
      this.printStats(this.state.key)
  }
  // prints game list Items via GamesListItem component
  gameListItems() {

    const listItems = Object.keys(this.props.gameData).map((Id) => {

        return(

          <GamesListItem
            key={Id}
            gameId={Id}
            gameData={this.props.gameData}
            getGames={ ()=>this.props.getGames() }
            printGames= { ()=> this.props.printGames() }
            edit = {this.state.edit}
            toggleEdit={ () => this.toggleEdit()}
            toggleView={ ()=> this.toggleView(Id)}
            view={this.state.view}
          />


        )
    })
    return listItems;

  }

  // function to handle input field changes, setting input as state
  grabInputTitle(e) {
      this.setState({statTitle: e.target.value});
  }
  // function to grab url from url input field
  grabInputDescription(e) {
      this.setState({statDescription: e.target.value});
  }

  // setting state of edit to true - renamed to toggle edit
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

    if(this.state.view === true)
    this.setState({view:false})
    else {
      this.setState({view:true})
    }
  }

// toggle state of edit. Enables you to edit a stat
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

// grabbing game data from firebase. (title, url)
  fetchGameData(key) {

    const fetchUrl = `https://game-log-app.firebaseio.com/${key}/.json`;
    axios.get(fetchUrl)
    .then( (response)=> {
      // setting game data state based on response from axios get request
      this.setState({gameData:response.data});

    })
    .catch( (error)=> {
      console.log(error)
    })

  }

  // fetching Gane Stats from database
  printStats(key) {
    console.log(key)
    const fetchUrl = `https://game-log-app.firebaseio.com/${key}/stats/.json`;
    axios.get(fetchUrl)
    .then( (response)=> {
      console.log('fetch has run');
      this.setState({stats:response.data});

    })
    .catch( (error)=> {
      console.log(error)
    })
    // preventing error when stats are null
    if(this.state.stats ===null) {
          return;
    }
    const listItems = Object.keys(this.state.stats).map((Id) => {

      return(
        <li key={Id} className="list-group-item">
            <GameStats
                statTitle={this.state.stats[Id]['title']}
                statDescription = {this.state.stats[Id]['description']}
                deleteStats={ ()=> this.deleteStat(Id)}
                statKey={Id}
                gameKey={this.state.key}

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
        axios.post(postUrl, {title:inputTitle, description:description})
        .then( (response) => {
          this.setState({editStat:false});
          this.printStats(key);

          })
        .catch( (error) => {
            console.log(error)
          })

      }
// deleting game stat from firebase - delete request
      deleteStat(key) {
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
          </ul> 
        ) 
      } else {
          if(this.state.editStat ===false) {
            return (
              <div className="gameStat">
                    {/* View Button - runs when view state is true */}
                    <h1>{this.state.gameData['title']}</h1>
                    <img src={this.state.gameData['url']} />
                    <br />
                    <button className="btn btn-success" onClick={ ()=> this.toggleEditStat()}>Add Stat</button>

                    <button className="btn btn-primary" onClick={()=> this.toggleView()}>Return</button>
                    {/* Printing games from database */}
                    <ul>{this.printStats(this.state.key)}</ul>

            </div>
          )
        } else {
            return (
              <div>
              <h1>Add A Stat</h1>
              <input placeholder={this.state.statTitle} onChange={this.grabInputTitle}/>
              <input placeholder={this.state.statDescription} onChange={this.grabInputDescription}/>
              <br />
              <br />
              <button className="btn btn-success" onClick={ ()=> this.postStat(this.state.key)}>Submit Stat</button>
              <button className="btn btn-warning" onClick={ ()=>this.toggleEditStat()}>Cancel</button>
              </div>
            )
      }
    }
  }
}


export default GamesList;
