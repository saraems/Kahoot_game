import React, {Component, Fragment} from 'react';
import './Game_play_panel.scss';



class GamePlayPanel extends Component {

componentWillMount() {
    this.itemsArray = this.createItemsArray([op,op], 3)
}

    createItemsArray = (itemsArray, itemsNumber) => {
        let itemsArray = [];
        for (let i = 0; i <= itemsNumber; i++) {
            let x = Math.random((0 - itemsArray.length) * itemsArray.length);
            itemsArray.push(arr[x])
        }
        return itemsArray
    };

    render() {
        return (
            <Fragment>
                <section className='main_game_panel_container'>
                    <header className='main_game_panel__header'>
                        <h1>Kahoot!</h1> <p>POINTS</p>
                    </header>
                    <main className='main_game_panel__body'>
                        <div className='item'>

                        </div>
                        <div className="item">

                        </div>
                        <div className="item">

                        </div>
                    </main>
                </section>
            </Fragment>
        );
    }
}

export default GamePlayPanel;
