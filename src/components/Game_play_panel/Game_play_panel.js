import React, {Component, Fragment} from 'react';
import './Game_play_panel.scss';

class GamePlayPanel extends Component {
    render() {
        return (
            <Fragment>
                <section className='main_game_panel_container'>
                    <header className='main_game_panel__header'>
                        <h1>Kahhoot!</h1> POINTS
                    </header>
                    <main className='main_game_panel__body'>

                    </main>
                </section>
            </Fragment>
        );
    }
}

export default GamePlayPanel;
