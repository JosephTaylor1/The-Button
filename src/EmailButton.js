import React, { Component } from 'react';
import './styles/EmailButton.css';

class EmailButton extends Component {

    render() {
      return (
        <form id="form-container" onSubmit={this.props.onSubmit}>
          <label id="email-label">
            Email:
            <input id="text-input" type="email" value={this.props.value} onChange={this.props.onChange} disabled={this.props.disabled}/>
          </label>
          <input id="button" type="submit" value="Submit" disabled={this.props.disabled}/>
        </form>
      );
    }
  }

export default EmailButton;
