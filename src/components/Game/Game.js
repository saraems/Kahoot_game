import React, { Component } from 'react';
import GamePlayPanel from '../Game_play_panel/Game_play_panel';
import GameScorePanel from '../Game_score_panel/Game_score_panel';
import './Game.scss';

class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
            itemsArray: [],
            collectedItems: [],
            score: [],
            bonus: 0,
            total: 0
        };
    }

    componentWillMount() {
        this.setState({
            itemsArray: this.createItemsArray(this.state.items, 15)
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

        this.score(this.state.collectedItems, item);

        this.setState({
            collectedItems: [...this.state.collectedItems, item],
            itemsArray: itemArr,
            total: this.state.total + item.unitPoints
        });

        console.log(this.state.score);
    }

    score(collectedItems, item) {

        if (!collectedItems.includes(item)) {
            let playersItem = {
                item: item.item,
                qty: 1,
                unitPoints: item.unitPoints,
                points: item.unitPoints,
            };
           this.setState({
               score: [ playersItem, ...this.state.score]
           })
        } else {
            let localScore = this.state.score;
            let bonus = this.state.bonus;

            for (let i = 0; i < localScore.length; i++) {
                if (localScore[i].item === item.item) {
                    localScore[i].qty += 1;
                    localScore[i].points += localScore[i].unitPoints;
                    if (localScore[i].item === 'A' && localScore[i].qty % 3 === 0) {
                        bonus += item.unitPoints;
                        localScore[i].points += item.unitPoints;
                        this.setState({
                            total: this.state.total += item.unitPoints
                        })
                    }
                    if (localScore[i].item === 'B' && localScore[i].qty % 2 === 0) {
                        bonus += item.unitPoints;
                        localScore[i].points += item.unitPoints;
                        this.setState({
                            total: this.state.total += item.unitPoints
                        })
                    }
                }
            }

            this.setState({
                score: [...localScore],
                bonus: bonus,
            })
        }
    }

    newGame() {
        window.location.reload();
    }

    render() {
        return (
            <div className='game_container'>
                <GamePlayPanel itemsArray={ this.state.itemsArray } collectedItems={ this.state.collectedItems } collectItem={ (index, item) => this.collectItem(index, item) } />
                <GameScorePanel collectedItems={ this.state.collectedItems } score={ this.state.score } total={ this.state.total } bonus={ this.state.bonus } newGame={ this.newGame }/>
            </div>
        );
    }
}

export default Game;
