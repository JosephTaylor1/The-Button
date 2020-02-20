import React, { Component } from 'react';

class EmailList extends Component {
    render() {
        const emails = this.props.emails || [];
        const emailItems = emails.map((emailName) =>
            <li key={emailName} value={emailName} >
                {emailName}
                </li>
            );

        return (
            <div>
                <h1> {this.props.title} </h1>
                <ol value={this.props.value} >
                    {emails.length ? emailItems : <p>This list is empty</p>}
                </ol>
            </div>
        );
    }
}

export default EmailList;
