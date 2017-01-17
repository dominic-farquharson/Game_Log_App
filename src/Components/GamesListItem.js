import React from 'react';
import axios from 'axios';

class GamesListItem extends React.Component {
  constructor() {
    super();
    this.state= {

      title:'',
      url: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',

    }
    this.postGames = this.postGames.bind(this);
    this.grabInputUrl = this.grabInputUrl.bind(this);
    this.grabInputTitle = this.grabInputTitle.bind(this);
  }

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

  // posting edited game to database
  postGames(key) {
    console.log(key)
    console.log(this.state.title)
    // chaning edit state to false on Submit

    //this.props.toggleEdit();

  //     // console.log('yes?', key)
      const title = this.state.title;
      const url = this.state.url;
      // Url of item in database
      const postUrl =  `https://game-log-app.firebaseio.com/${key}/.json`;

      //  posting game title and game url from input fields
      axios.put(postUrl, {
          title: title,
          url: url
      }).then(() => {
          console.log('Request has been sent.');
          // Changing state of edit
          this.props.toggleEdit();
          // Updating state, by performing another get request
          this.props.getGames();
          // printing out games based on updated State
          this.props.printGames();
      }).catch((error) => {
          console.log('There was an error');
      })
  }

  // function to handle input field changes, setting input as state
  grabInputTitle(e) {
      this.setState({title: e.target.value});
  }
  // function to grab url from url input field
  grabInputUrl(e) {
      this.setState({url: e.target.value});
  }

  render() {
    const gameId=this.props.gameId;
      if(this.props.view === true) {
        return (
          <h1>View of {gameId}</h1>
        )
      }

      if(this.props.edit===false) {
        return (
      <li id={gameId} key={gameId}>
        {this.props.gameData[gameId]['title']}
        <br/>
        {<img src={this.props.gameData[gameId]['url']} />}
        <br />
        {/* View Button - sending key value as argument */}
       <button onClick={() => this.viewGame(gameId)}>View</button>
        <br/> {/* Edit Button - sending key value as argument */}
        <button onClick={() => this.props.toggleEdit()}>Edit</button>
       {/* Delete Button -sending key value as argument */}
        <button onClick={()=> this.deleteGame(gameId)}>Delete</button>
        <hr />
      </li>
    )
    }

    else {
      // runs When Edit State is true
      return (
        <li id={gameId} key={gameId}>
          <p>Edit Title</p>
          <input placeholder={this.props.gameData[gameId]['title']} onChange={ this.grabInputTitle } />
          <br/>
          <p>Edit Image Url</p>
          {<input placeholder={this.props.gameData[gameId]['url']} onChange={this.grabInputUrl} />}
          <br />
         {/* Delete Button -sending key value as argument */}
          <button onClick={()=>this.postGames(gameId)}>Submit</button>
          <br />
          <hr />
        </li>
      )
    }

  }
}

export default GamesListItem;
