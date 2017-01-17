import React from 'react';

class GameStats extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ul>
      <p>{this.props.statTitle}</p>
      <p>{this.props.statDescription}</p>
      </ul>
    )
  }
}

export default GameStats;
