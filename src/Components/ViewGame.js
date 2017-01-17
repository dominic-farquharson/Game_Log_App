import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './ViewGame.css';

// let EditGame = (props) => {
//   return (
//
//   )
// }

class EditGame extends React.Component {
  constructor() {
    super();
    this.addStat = this.addStat.bind(this);
    this.postStat = this.postStat.bind(this);
  }

  // Add a new Stat - make into a component?
  addStat() {
    // let statsFeed  = $('#viewGame').style.display;
    // if(statsFeed=='none') {
    //   //$('#viewGame').toggle();
    // }
    // $('#viewGame').toggle();
    let testing =
    <div id="viewGame">
    <legend > Title
    < input id = "addStat" / >
    < /legend>
    <legend>Description
    <input id="Description" />
    </legend>
    <button onClick={ ()=> this.postStat() }>Submit</button>
    </div>

    ;
    console.log('add Stat')
    ReactDOM.render(
      testing,
      document.getElementById('stats')
    )
  }

  // post stat to database
  postStat() {
    let li = <li>it works</li>
    ReactDOM.render(
      li,
      document.getElementById('stats')

    )
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
