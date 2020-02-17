import React, { Component } from 'react';
import GamesList from './GamesList.js';
import './EmailButton.css';

class EmailButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenGame: [
                {
                    id: 0,
                    title: 'Smite'
                },
                {
                    id: 1,
                    title: 'Rainbow 6'
                }
            ]
        }
    }

    render() {
      return (
        <form id="form-container" onSubmit={this.props.onSubmit}>
          <label id="email-label">
            Email:
            <input id="text-input" type="email" value={this.props.value} onChange={this.props.onChange} />
          </label>
          <input id="button" type="submit" value="Submit" />
          <GamesList chosenGame={this.state.chosenGame}/>
        </form>
      );
    }
  }

export default EmailButton;
