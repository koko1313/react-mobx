import React from 'react';
import { observer, inject } from 'mobx-react';

@observer
class Collection extends React.Component {

    addContact = () => {
        this.props.contacts.add({id: 3, name: "person 3", email: "p3@mail.com"});
    }

    renderContacts = () => {
        return this.props.contacts.all.map((contact, index) => {
            return <p key={index}>{contact.email}</p>;
        });
    }

    render() {
        return <>
            {this.renderContacts()}
            <button onClick={this.addContact}>Add contact</button>
        </>;
    }

}

export default inject("contacts")(Collection);