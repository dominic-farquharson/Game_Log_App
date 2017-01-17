import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './ViewGame.css';
import axios from 'axios';

// let EditGame = (props) => {
//   return (
//
//   )
// }

class EditGame extends React.Component {
  constructor() {
    super();
    // binding functions
    this.addStat = this.addStat.bind(this);
    this.postStat = this.postStat.bind(this);
    this.grabInputTitle = this.grabInputTitle.bind(this);
    this.grabInputDescription = this.grabInputDescription.bind(this);
    // setting initial state of input fields
    this.state = {
      title:'',
      description:''
    }
  }

  // Add a new Stat - make into a component?
  addStat() {
    // let statsFeed  = $('#viewGame').style.display;
    // if(statsFeed=='none') {
    //   //$('#viewGame').toggle();
    // }
    // $('#viewGame').toggle();

    // Input Fields to grab stat input
    let testing =
    <div id="viewGame">
    <legend > Title
    < input onChange={this.grabInputTitle} placeholder={this.state.title} id = "addStat" / >
    < /legend>
    <legend>Description
    <input onChange={this.grabInputDescription} placeholder={this.state.description} id="Description" />
    </legend>
    <button onClick={ ()=> this.postStat(this.props.index) }>Submit</button>
    </div>

    ;
    console.log('add Stat')
    ReactDOM.render(
      testing,
      document.getElementById('stats')
    )
  }

  // post stat to database
  postStat(key) {
            const inputTitle = this.state.title;
            const description= this.state.description;
            const postUrl = `https://game-log-app.firebaseio.com/${key}/stats/.json`;
    console.log('key', key);
    axios.post(postUrl, {title:inputTitle, description:description})
    .then( (response) => {
      console.log(response.data)
    })
    .catch( (error) => {
      console.log(error)
    })




    // ReactDOM.render(
    //   li,
    //   document.getElementById('stats')
    //
    // )
  }

  // printing Stats from database
  fetchStat() {

  }

  // function to grab input title
  grabInputTitle(e) {
    // setting state based on input
      this.setState({title: e.target.value});
  }
  // function to grab input description
  grabInputDescription(e) {
    // setting state based on input
      this.setState({description: e.target.value});
  }

  render() {
    const ViewGame = this.props;
    return ( <
      div  >
      <
      h1 > {
        `${ViewGame.games[ViewGame.index]['title'] }`
      } < /h1>
      <button onClick = {
        () => this.addStat()
      } > Add Stat < /button>
      { /* Stats container */ }
      <div id = "stats" > < /div> <
      /div>
    )
  }
}

export default EditGame;
