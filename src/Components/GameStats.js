import React from 'react';
import axios from 'axios';

class GameStats extends React.Component {
  constructor() {
    super();
    this.state = {
      edit:false,
      statTitle:'',
      statDescription:''

    }
    this.toggleEdit = this.toggleEdit.bind(this);
    this.grabInputTitle = this.grabInputTitle.bind(this);
    this.grabInputDescription = this.grabInputDescription.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
  }
  // Submitting Edits to database
  submitEdit(key, index) {
    const inputTitle = this.state.statTitle;
    const description= this.state.statDescription;
    const postUrl = `https://game-log-app.firebaseio.com/${index}/stats/${key}.json`;
    console.log('key', key);
      axios.put(postUrl, {title:inputTitle, description:description})
      .then( (response) => {
        this.setState({editStat:false});
        //this.printStats(key);:

      })
      .catch( (error) => {
        console.log(error)
      })

  }
  //switching state from true to false to output edit fields
  toggleEdit() {
    if(this.state.edit==false) {
    this.setState({edit:true})
  }
  else {
    this.setState({edit:false})
  }
  }

  // function to handle input field changes, setting input as state
  grabInputTitle(e) {
      this.setState({statTitle: e.target.value});
  }
  // function to grab url from url input field
  grabInputDescription(e) {
      this.setState({statDescription: e.target.value});
  }


  render() {

    let button =   <button onClick={ ()=> this.submitEdit(this.props.statKey) }>Submit</button>;

    if(!this.state.edit) {
    return (
      <ul>
      <p>{this.props.statTitle}</p>
      <p>{this.props.statDescription}</p>
      <button onClick={()=>this.toggleEdit()}>Edit</button>
      <button onClick={ ()=> this.props.deleteStats()}>Delete</button>
      </ul>
    )
  }
  else if(this.state.edit===true) {

    return (
      <div>
      <p>Title</p>
      <input placeholder={this.props.statTitle}  onChange={this.grabInputTitle} />
      <p>Description</p>
      <input placeholder={this.props.statDescription} onChange={this.grabInputDescription} />
      <button onClick={()=>this.toggleEdit()}>Cancel</button>
      <div>{this.props.statKey}</div>
      <div>{this.props.gameKey}</div>
      {<button onClick={ ()=> this.submitEdit(this.props.statKey, this.props.gameKey) }>Submit</button>}

      </div>
    )
  }
  }
}

export default GameStats;
