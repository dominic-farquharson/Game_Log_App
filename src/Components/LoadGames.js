import React, {Component} from 'react';
import axios from 'axios';
import GamesList from './GamesList';
import $ from 'jquery';

/* Load Game component
Will perform a get request to output games data

*/
class LoadGames extends Component {
    constructor() {
        super();

        this.state = {
            title: [],
            url: [],
            games: {}
        }
        // binding methods
        this.getGames = this.getGames.bind(this);
        this.printGames = this.printGames.bind(this);
    }
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
            this.setState({games: response.data});
            // this.printGames();
        }).catch((error) => {
            console.log(error);
        })
    }

    // outPutting the GamesList component
    printGames() {
        return (
          <GamesList
            gameData={this.state.games}
            getGames={ ()=>this.getGames() }
            printGames= { ()=> this.printGames() }

          />
        )
    }

    render() {
        return (
            <div>
                <h1 id="gamesFeedTitle">Games Feed</h1>
                {this.printGames()}
            </div>
        )
    }
}
export default LoadGames;
