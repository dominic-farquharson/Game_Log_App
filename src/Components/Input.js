import React from 'react';
import axios from 'axios';

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
      this.setState({title:e.target.value});
    }
    // function to grab url from url input field
    grabInputUrl(e) {
      this.setState({url:e.target.value});
    }

    postInput() {

      const inputTitle = this.state.title;
      const url = this.state.url;
        console.log('title',inputTitle, 'url', url)
      // making a post request
      // posting game title from input field
      // axios.post(url, {title:inputValue}).then( ()=>{
      //   console.log('Request has been sent.')
      // })
      // .catch(
      //   (error) => {
      //     console.log('There was an error');
      //   })
    }


    render() {
        return (
            <div>
                <input placeholder={this.state.title} onChange={this.grabInputTitle}/>
                <input placeholder={this.state.url} onChange={this.grabInputUrl}/>
                <button onClick={this.postInput}>Submit</button>
            </div>
        )
    }
}

export default Input;
