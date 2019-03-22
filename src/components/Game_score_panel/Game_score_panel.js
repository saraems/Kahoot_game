import React, { Component } from 'react';
import './Game_score_panel.scss';

class GameScorePanel extends Component {
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
                    <div className="collected_item">
                        <div className="collected_item__icon">

                        </div>
                        <p className="collected_items__quantity"> 4 </p>
                        <p className="collected_items__score"> 90 </p>
                    </div>
                    <div className="collected_item">

                    </div>
                    <div className="collected_item">

                    </div>
                    <div className="collected_item">

                    </div>
                </div>
                <div className='score_game_panel__bonus'>
                    Bonuses: <span id='players_bonus'>90</span>
                </div>
                <div className="score_game_panel__resume_game">
                    <div className="total">Total: <span id='total_score'>902</span></div>
                    <button className='new_game_btn'>New Game</button>
                </div>
            </section>
        );
    }
}

export default GameScorePanel;
