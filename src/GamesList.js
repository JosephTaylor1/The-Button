import React, { Component } from 'react';

class GamesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listOpen: false,
            chosenGame: [
                {
                    id: 0,
                    title: 'Smite',
                    selected: false,
                    key: 'game'
                },
                {
                    id: 1,
                    title: 'Rainbow 6',
                    selected: false,
                    key: 'game'
                }
            ]
        }
    }

    render() {
        const{list} = this.props
        const{listOpen} = this.setState
        return(
            <div className='dd-wrapper'>
                <div className='dd-header' onClick={this.props.onClick}>
                    <div className='dd-header-title'>{this.props.title}</div>
                    {listOpen && <select className='dd-list'>
                        {list.map((item) => (
                            <option className='dd-list-item' key={item.id}>{item.title}</option>
                        ))}
                    </select>}
                </div>
            </div>
        )
    }
}

export default GamesList;
