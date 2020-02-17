import React, { Component } from 'react';
import EmailButton from './EmailButton.js';
import EmailList from './EmailList.js';
import GamesList from './GamesList.js';

class EmailTableConstructor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            emails: []
        }
    }

handleChange = (e) => {
    this.setState({
        email: e.target.value
    });
}

handleSubmit = (e) => {
    this.setState({
        email: '',
        emails: [...this.state.emails, this.state.email]
    });
    alert(this.state.email + ' was added to the group');
    e.preventDefault();
}

toggleList(){
    this.setState(prevState => ({
        listOpen: !prevState.listOpen
    }))
}

  render() {
    return (
      <div>
        <EmailList emails={this.state.emails}/>
        <EmailButton value={this.state.email} onSubmit={this.handleSubmit} onChange={this.handleChange}/>
        <GamesList title='Select a game' list={this.state.chosenGame} onClick={this.toggleList}/>
      </div>
    );
  }
}

export default EmailTableConstructor;
