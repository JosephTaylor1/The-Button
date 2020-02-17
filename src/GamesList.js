import React, { Component } from 'react';

class GamesList extends Component {

    render() {
        let chosenGame = this.props.chosenGame;
        let options = chosenGame.map((item) =>
            <option key={item.id} value={item.id}>
                {item.title}
            </option>
    );
        return(
            <select className='dd-select'>
            <option>Select a game</option>
                {options}
            </select>
        )
    }
}

export default GamesList;
