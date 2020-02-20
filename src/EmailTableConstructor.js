import React, { Component } from 'react';
import EmailButton from './EmailButton.js';
import EmailList from './EmailList.js';
import GamesList from './GamesList.js';
import { games } from './infoObjects/gamesObject.js';

class EmailTableConstructor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            emails: {}, //TODO: change var name to something that indicates that this is a master list of each list of emails tagged to each game
            selectedGameId: ''
        }
    }

onEmailChange = (e) => {
    this.setState({
        email: e.target.value, //this passes the email into the state for use in the onEmailSubmit func
    });
}

onEmailSubmit = (e) => { //Here we grab the email from the input field and add it to the email list that corresponds to the gameID
    this.setState({
        email: '', //empty the email from the state
        emails: {
            ...this.state.emails, //spread operator copies the emails list
            [this.state.selectedGameId]: [...this.state.emails[this.state.selectedGameId], this.state.email] //this looks inside the email list into the email key, then copies the emails inside the key and adds the new email
        }

    });
    alert(this.state.email + ' was added to the ' + this.getSelectedGameTitle(games, this.state.selectedGameId) + ' group');
    e.preventDefault();
}


//Here we grab the ID of the game and add either a new empty array if the gameID doesnt exist
onGameSelect = (e) => {
    this.setState({
        selectedGameId: e.target.value,
        emails: {
            ...this.state.emails, //spread operator copies the emails list
            [e.target.value]: this.state.emails[e.target.value] || [] //then we take the idkey, set it to itself or add a new array if it doesnt exist
        }
    });
}
//this function uses the find helper to loop through the gamesArray returning the game Object, then returns the object.title of the game
getSelectedGameTitle = (gamesArray, gameId) => {  //TODO: create a utils file for this since it's now no longer dependant on the state
    let gameSelected = gamesArray.find((game) => {
        return game.id === parseInt(gameId, 10);
    }) || {title: 'Please select a game!'};

    return gameSelected.title;
}

  render() {

    return (
      <div>
        <EmailList title={this.getSelectedGameTitle(games, this.state.selectedGameId)} emails={this.state.emails[this.state.selectedGameId]}/>
        <GamesList value={this.state.selectedGameId} onChange={this.onGameSelect} />
        <EmailButton value={this.state.email} onSubmit={this.onEmailSubmit} onChange={this.onEmailChange} disabled={!this.state.selectedGameId}/>
      </div>
    );
  }
}

export default EmailTableConstructor;
