import React from 'react';
import axios from 'axios';

class Input extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 'Enter a Game Title'
        }
        // binding functions
        this.grabInput = this.grabInput.bind(this);
        this.postInput = this.postInput.bind(this);
    }
    // function to handle input field changes, setting input as state
    grabInput(e) {
      this.setState({value:e.target.value});
    }

    postInput() {

      const inputValue = this.state.value;
        console.log(inputValue)
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
                <input placeholder={this.state.value} onChange={this.grabInput}/>
                <button onClick={this.postInput}>Submit</button>
            </div>
        )
    }
}

export default Input;
