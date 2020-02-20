import React, { Component } from 'react';
import { games } from './infoObjects/gamesObject.js';

class GamesList extends Component {

    render() {
        const options = games.map((item) =>
            <option key={item.id} value={item.id}>
                {item.title}
            </option>
        );
        return(
            <select className='games-select' value={this.props.value} onChange={this.props.onChange}>
            <option>Select a game</option>
                {options}
            </select>
        )
    }
}

export default GamesList;
