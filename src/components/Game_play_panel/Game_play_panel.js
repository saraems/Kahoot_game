import React, {Component, Fragment} from 'react';
import './Game_play_panel.scss';



class GamePlayPanel extends Component {

    render() {
        return (
            <Fragment>
                <section className='main_game_panel_container'>
                    <header className='main_game_panel__header'>
                        <h1>Kahoot!</h1> <p>POINTS</p>
                    </header>
                    <main className='main_game_panel__body'>

                        { this.props.itemsArray.map((item, index) => {
                            return (
                                <div className={`item ${item.item}`} key={ index } onClick={ () => this.props.collectItem(index, item) } id={ index }>
                                    { item.item }
                                </div>
                            )
                        }) }
                    </main>
                </section>
            </Fragment>
        );
    }
}

export default GamePlayPanel;
