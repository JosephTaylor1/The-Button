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
            <ol value={this.props.value} >
                {emails.length ? emailItems : <p>This list is empty</p>}
            </ol>
        );
    }
}

export default EmailList;
