import React from 'react';

class Input extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 'Enter a Game Title'
        }
        this.grabInput = this.grabInput.bind(this);
    }
    // function to handle input field changes, setting input as state
    grabInput(e) {
      this.setState({value:e.target.value});
    }

    postInput() {
      
    }


    render() {
        return (
            <div>
                <input placeholder={this.state.value} onChange={this.grabInput}/>
                <button>Submit</button>
            </div>
        )
    }
}

export default Input;
