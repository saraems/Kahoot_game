import React, { Component } from 'react';
import './Game_score_panel.scss';

class GameScorePanel extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <section className='score_game_panel_container'>
                <div className="score_game_panel__header">
                    Players Items
                </div>
                <div className="main_game_panel__body_header">
                    <p>item</p>
                    <p>qty</p>
                    <p>score</p>
                </div>
                <div className='score_game_panel__body'>

                    { this.props.score.map((item, index) => {
                        return (
                            <div className="collected_item" key={ index }>
                                <div className={`collected_item__icon ${  item.item }`}>
                                    { item.item }
                                </div>
                                <p className="collected_items__quantity"> { item.qty } </p>
                                <p className="collected_items__score"> { item.points } </p>
                            </div>
                        )
                    }) }

                </div>
                <div className='score_game_panel__bonus'>
                    Bonus: <span id='players_bonus'> { this.props.bonus } </span>
                </div>
                <div className="score_game_panel__resume_game">
                    <div className="total">Total: <span id='total_score'> { this.props.total } </span></div>
                    <button className='new_game_btn' onClick={ this.props.newGame }>New Game</button>
                </div>
            </section>
        );
    }
}

export default GameScorePanel;
