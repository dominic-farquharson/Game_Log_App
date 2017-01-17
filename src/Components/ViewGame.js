import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './ViewGame.css';
import axios from 'axios';
import  {Link}  from 'react-router';

// let EditGame = (props) => {
//   return (
//
//   )
// }

class ViewGame extends React.Component {
  constructor() {
    super();
    // binding functions
    this.addStat = this.addStat.bind(this);
    this.postStat = this.postStat.bind(this);
    this.grabInputTitle = this.grabInputTitle.bind(this);
    this.grabInputDescription = this.grabInputDescription.bind(this);
    this.fetchStat = this.fetchStat.bind(this);
    this.printStats = this.printStats.bind(this);
    // setting initial state of input fields
    this.state = {
      title:'',
      description:'',
      titles:[]
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

    </div>;
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

  // fetching Stats from database
  fetchStat(key) {
    console.log(key);
    console.log('Fetch Stat has run');
    const fetchUrl = `https://game-log-app.firebaseio.com/${key}/stats/.json`;
    axios.get(fetchUrl)
    .then( (response)=> {
      console.log('fetch has run');
      console.log('response',response.data)
      this.setState({titles:response.data});
      // console.log(this.state.titles)
    })
    .catch( (error)=> {
      console.log(error)
    })

    return (
      console.log('key',key),
        console.log('titles',this.state.titles)
    )


  }

  // printing stats
  printStats(key) {
    return (
      Object.keys(this.state.titles).map( (data) => {
        return (
        <li>
          <p>{this.state.titles[data]['title']}</p>
          <p>{this.state.titles[data]['description']}</p>
          <button>Delete</button>
          <button>Edit</button>

        </li>
      )
      })
    //   Object.keys(this.state.titles).map((data) => {
    //       return <li id={data} key={data}>
    //           {this.state.games[`${data}`]['title']}
    //           <br/> {< img src = {
    //               this.state.games[`${data}`]['url']
    //           } />}
    //           <br/> {/* View Button - sending key value as argument */}
    //           <button onClick={() => this.viewGame(data)}>View</button>
    //           <br/> {/* Edit Button - sending key value as argument */}
    //           <button onClick={() => this.editGame(data)}>Edit</button>
    //           {/* Delete Button -sending key value as argument */}
    //           <button onClick={() => this.deleteGame(data)}>Delete</button>
    //       </li>
    // })
  )
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
    return (
      <div  >
      {ViewGame.index}
      <
      h1 > {
        `${ViewGame.games[ViewGame.index]['title'] }`
      } < /h1>
      <button onClick = {
        () => this.addStat()
      } > Add Stat < /button>
      {/* Return home button */}
      <button onClick={ ()=> location.reload() }>Return Home</button>
      { /* Stats container */ }
      <div id = "stats"> </div>
      {this.fetchStat(ViewGame.index)}
      {this.printStats(ViewGame.index)}
      </div>
    )
  }
}

export default ViewGame;
