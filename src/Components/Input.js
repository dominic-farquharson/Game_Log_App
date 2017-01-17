import React from 'react';
import axios from 'axios';
import $ from 'jquery';

class Input extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'Enter a Game Title',
            url: 'Enter the url of the game cover'
        }
        // binding functions
        this.grabInputTitle = this.grabInputTitle.bind(this);
        this.grabInputUrl = this.grabInputUrl.bind(this);
        this.postInput = this.postInput.bind(this);
    }
    // function to handle input field changes, setting input as state
    grabInputTitle(e) {
        this.setState({title: e.target.value});
    }
    // function to grab url from url input field
    grabInputUrl(e) {
        this.setState({url: e.target.value});
    }

      //  making a post request
    postInput() {

        const inputTitle = this.state.title;
        const url = this.state.url;
        const postUrl = 'https://game-log-app.firebaseio.com/.json';

        //console.log('title',inputTitle, 'url', url)


        //  posting game title and game url from input fields
        axios.post(postUrl, {
            title: inputTitle,
            url: url
        }).then(() => {
            console.log('Request has been sent.');
            // clearing input fields after a successful submission
            $('#title').val('').attr('placeholder', 'Enter a title');
            $('#url').val('').attr('placeholder', 'Enter the url of the game cover');
        }).catch((error) => {
            console.log('There was an error');
        })
    }

    render() {
        return (
            <div>
                <label htmlFor="title">Title

                    <input id="title" placeholder={this.state.title} onChange={this.grabInputTitle}/>

                </label>
                <br/>
                <label htmlFor="url">Enter the Game cover (url)
                    <input id="url" placeholder={this.state.url} onChange={this.grabInputUrl}/>
                </label>
                <button onClick={this.postInput}>Submit</button>
            </div>
        )
    }
}

export default Input;
