import React, { Component } from 'react';
import Game from '../Game/Game';
import './App.scss';

const items = [{
  item: 'A',
  unitPoints: 50
},
  {
    item: 'B',
    unitPoints: 30
  },
  {
    item: 'C',
    unitPoints: 20
  },
  {
    item: 'D',
    unitPoints: 15
  }
];

class App extends Component {

  render() {
    return (
          <Game className='game_container' items={ items }/>);
  }
}

export default App;
