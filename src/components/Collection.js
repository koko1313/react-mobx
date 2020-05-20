import React from 'react';
import { observer, inject } from 'mobx-react';

@observer
class Collection extends React.Component {

    render() {
        return this.props.contacts.all.map((contact, index) => {
            return <p key={index}>{contact.email}</p>;
        });
    }
    
}

export default inject("contacts")(Collection);