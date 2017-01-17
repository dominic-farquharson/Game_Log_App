import React, {Component} from 'react';
import axios from 'axios';
import PrintGames from './PrintGames';

/* Load Game component
Will perform a get request to output games data

*/
class LoadGames extends Component {
    constructor() {
        super();
        this.getGames = this.getGames.bind(this);
        // this.printGames = this.printGames.bind(this);
        this.state = {
            title: [],
            url: [],
            games: []
        }
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

    render() {
        return (
            <div>
                <div>Games Feed</div>
                <PrintGames
                gamesTitle={Object.keys(this.state.games).map((data, i) => {
                    return <li key={i}>
                        {this.state.games[`${data}`]['title']} {<br />}
                        {<img src={this.state.games[`${data}`]['url']} />}

                      </li>
                })}    />





            </div>
        )

}
}
export default LoadGames;


//   Object.keys(this.state.games).map((data, i) => {
//       return <li key={i}>
//           {this.state.games[`${data}`]['url']}</li>
//   })}
