import React, { Component } from 'react';
import Game from '../Game/Game';
import './App.scss';


class App extends Component {
  render() {
    return (
          <Game className='game_container'/>);
  }
}

export default App;
