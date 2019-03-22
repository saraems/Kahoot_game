import React, { Component, Fragment } from 'react';
import GamePlayPanel from '../Game_play_panel/Game_play_panel';
import GameScorePanel from '../Game_score_panel/Game_score_panel';
import './Game.scss';

class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            state: ''
        };

        this.items = [{
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
            },
            {
                item: 'E',
                unitPoints: 10
            },
            {
                item: 'F',
                unitPoints: 5
            },
        ];

    }



    render() {
        return (
            <div className='game_container'>
                <GamePlayPanel items={ this.items }/>
                <GameScorePanel/>
            </div>
        );
    }
}

export default Game;
