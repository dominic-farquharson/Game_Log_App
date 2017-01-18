import React, {Component} from 'react';
import Header from './Header';
import LoadGames from './LoadGames';

// Home class component - render the root page
class Home extends Component {
    render() {
        return (
            <div>
                <Header title="Game Logger"/>
                <LoadGames />
            </div>
        )
    }
}

export default Home;
