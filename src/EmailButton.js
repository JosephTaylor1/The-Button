import React, { Component } from 'react';
import GamesList from './GamesList.js';
import './styles/EmailButton.css';

class EmailButton extends Component {

    render() {
      return (
        <form id="form-container" onSubmit={this.props.onSubmit}>
          <label id="email-label">
            Email:
            <input id="text-input" type="email" value={this.props.value} onChange={this.props.onChange} />
          </label>
          <input id="button" type="submit" value="Submit" />
          <GamesList/>
        </form>
      );
    }
  }

export default EmailButton;
