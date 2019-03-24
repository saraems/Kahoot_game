import React, { Component } from 'react';
import GamePlayPanel from '../Game_play_panel/Game_play_panel';
import GameScorePanel from '../Game_score_panel/Game_score_panel';
import './Game.scss';

class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collectedItems: [],
            itemsArray: [],
            playersScore: [],
            bonuses: 0,
            totalScore: 0
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

    componentWillMount() {
        this.setState({
            itemsArray: this.createItemsArray(this.items, 15)
        });
    }

    createItemsArray = (items, itemArrayLength) => {
        let itemsAr = [];
        for (let i = 0; i < itemArrayLength; i++) {
            let x = Math.floor(Math.random() * (items.length));
            itemsAr.push(items[x])
        }
        return itemsAr
    };

    collectItem(index, item) {
        const itemArr = this.state.itemsArray.filter((ite, i) => i !== index);

        this.playersScore(this.state.collectedItems, item);

        this.setState({
            collectedItems: [this.state.collectedItems, item],
            itemsArray: itemArr,
            totalScore: this.state.totalScore += item.unitPoints
        });

        console.log(this.state.playersScore);
    }

    playersScore(collectedItems, item) {

        if (!collectedItems.includes(item)) {
            let playersItem = {
                item: item.item,
                qty: 1,
                points: item.unitPoints,
            };
           this.setState({
               playersScore: [ playersItem, ...this.state.playersScore]
           })
        } else {
            let localPlayersScore = this.state.playersScore;

            for (let i = 0; i < localPlayersScore.length; i++) {
                if (localPlayersScore[i].item === item.item) {
                    localPlayersScore[i].qty += 1;
                    this.setState({
                        playersScore: [...localPlayersScore]
                    })
                }
            }

        }
    }

    bonuses(score, letter) {
        if (score.item === letter && score.qty % 3 === 0) {
            return score.unitPoints
        }
    }

    render() {
        return (
            <div className='game_container'>
                <GamePlayPanel itemsArray={ this.state.itemsArray } collectedItems={ this.state.collectedItems } collectItem={ (index, item) => this.collectItem(index, item) } />
                <GameScorePanel collectedItems={ this.state.collectedItems } playersScore={ this.state.playersScore } totalScore={ this.state.totalScore }/>
            </div>
        );
    }
}

export default Game;
