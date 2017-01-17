import React, {Component} from 'react';
import axios from 'axios';
import PrintGames from './PrintGames';
import $ from 'jquery';

import './LoadGames.css';

//testing
import ReactDOM from 'react-dom';
import ViewGame from './ViewGame';


/* Load Game component
Will perform a get request to output games data

*/
class LoadGames extends Component {
    constructor() {
        super();

        this.state = {
            title: [],
            url: [],
            games: []
        }
        // binding methods
        this.getGames = this.getGames.bind(this);
        this.deleteGame = this.deleteGame.bind(this);
        this.editGame = this.editGame.bind(this);
        this.printGames = this.printGames.bind(this);
        this.postGames = this.postGames.bind(this);
        this.viewGame = this.viewGame.bind(this);
        // this.postStat = this.postStat.bind(this);
    }

    // componentWillMount() {
    //   this.getGames();
    // }

    componentDidMount() {
        this.getGames();
    }
    componentWillMount() {

        this.getGames();


    }

    // Performing get request
    getGames() {
        const url = 'https://game-log-app.firebaseio.com/.json';
        axios.get(url).then((response) => {
            console.log(response);
            this.setState({games: response.data, title: response.data.title});
            // this.printGames();
        }).catch((error) => {
            console.log(error);
        })
    }

    // printGames() {
    //   console.log('yeah?')
    //   let titles = this.state.games;
    //   console.log(titles['-KaeBy7lI3CoZUloAz1c']['title']);
    //   return (
    //   <li>titles['-KaeBy7lI3CoZUloAz1c']['title']</li>
    //   )
    // }

    // outPutting the PrintGames component
    printGames() {
        return (
            <PrintGames gamesTitle={Object.keys(this.state.games).map((data) => {
                return <li id={data} key={data}>
                    {this.state.games[`${data}`]['title']}
                    <br/> {< img src = {
                        this.state.games[`${data}`]['url']
                    } />}
                    <br/> {/* View Button - sending key value as argument */}
                    <button onClick={() => this.viewGame(data)}>View</button>
                    <br/> {/* Edit Button - sending key value as argument */}
                    <button onClick={() => this.editGame(data)}>Edit</button>
                    {/* Delete Button -sending key value as argument */}
                    <button onClick={() => this.deleteGame(data)}>Delete</button>
                </li>
            })}/>

        )
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
                this.getGames();
                // printing out games based on updated State
                this.printGames();

            }).catch((error) => console.log(error)// Item not deleted if no
            );
        } else {
            alert('It will not be deleted');
        }

    }

    // edit game title  - Make edit game component?????
    editGame(key) {
        console.log('I will edit', key);
        console.log(this.state.games[`${key}`]['title'])
        // Changing html to input field
        $(`#${key}`).html(

          `<input id="editTitle" value=${this.state.games[key]['title']} />

          <input id="editUrl" value=${this.state.games[key]['url']} />

          <button onClick= ${ ()=> this.postGames(key) } >Submit</button> `
        );
        /*
          $(`#${key}`).html(`<input id="editTitle" value="${this.state.games[key]["title"]}" />` );
              $(`#${key}`).append(`<input id="editUrl" value="${this.state.games[key]["url"]}" />`);
            // $(`#${key}`).append(`  <button onClick= "${ ()=> this.postGames(key) }" >Submit</button>`);
            //  $(`#${key}`).append(` <button onClick="${ ()=> console.log('yes') }" >Submit</button>`);
            //$(`#${key}`).append(` <button onClick=${ this.postGames('hi')  }>Submmit</button> `);
            $(`#${key}`).append(` <button onClick=" () =>{console.log('hi')}"    >Submmit</button> `);
*/

        return ( <LoadGames />
        // $(`#${key}`).html(
        //   `${<LoadGames></LoadGames>}`
        // )
        )

    }
    // posting edited game to database
    postGames(key) {
        console.log('yes?', key)
        // const inputTitle = $(`#editTitle`).val();
        // // Edited url
        // const url = $(`#editUrl`).val();
        // // Url of item in database
        // const postUrl =  `https://game-log-app.firebaseio.com/${key}/.json`;
        // // function to post new game information
        // this.postGames( postUrl, inputTitle, url)
        //
        //
        //
        // //  posting game title and game url from input fields
        // axios.post(postUrl, {
        //     title: inputTitle,
        //     url: url
        // }).then(() => {
        //     console.log('Request has been sent.');
        //     // Updating state, by performing another get request
        //     this.getGames();
        //     // printing out games based on updated State
        //     this.printGames();
        // }).catch((error) => {
        //     console.log('There was an error');
        // })
    }

    // Creating Game Component - appears on Click, prints out Game Stats to screen
    viewGame(key) {
      console.log('key', key);
      //
      //
      // const title =`<h1>${this.state.games[key]['title']}</h1>`;
      // const gamesFeed = $('#gamesFeed').html(title);

      // Return Home and Add Stat Button

      // doesn't work
      // const button = `<button id="view" onClick=${() => {alert('hello') }}>Add Stat</button><br /><button id="view" onClick=${ ()=> this.printGames() }>Return Home</button>`;
      // works

      //gamesFeed.append(button);


      // rendering directly to the Dom
      ReactDOM.render(
        <ViewGame games={this.state.games} index={key} />,
      document.getElementById('gamesFeed')
      )
    }



    render() {
        return (
            <div>
                <div>Games Feed</div>
                {this.printGames()}

            </div>
        )

    }
}
export default LoadGames;

//   Object.keys(this.state.games).map((data, i) => {
//       return <li key={i}>
//           {this.state.games[`${data}`]['url']}</li>
//   })}
