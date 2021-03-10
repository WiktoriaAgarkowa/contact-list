import React, {Component} from 'react';
import './App.css';
import './contact_table/List.css';
import List from './contact_table/List';


class ContactListApp extends Component {
    constructor() {
        super();
        this.state = {
            contacts: [],
            filterContacts: []
        }
    }

    componentDidMount() {
        this.addContacts();
    }

    addContacts = () => {
        const endpoint = 'https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json';

        fetch(endpoint)
        .then(blob => blob.json())
        .then(data => {

            data.sort(function (a,b) {
                if (a.last_name > b.last_name) {
                    return 1;
                  }
                  if (a.last_name < b.last_name) {
                    return -1;
                  }
                  return 0;
            });
            this.setState({
                contacts: data
            }) 

            this.filterContactList();
        })

    }

    filterContactList = () => {
        this.setState((state) => {
            let newContactList = state.contacts.filter((contact) => {
                return(contact.first_name.includes(this._inputFilter.value));
            });

            return({
                filterContacts: newContactList
            })
        })
    }

    render() {
        return (
            <>
                <header>
                    <h1>Contacts</h1>
                </header>

                <input ref={element => this._inputFilter = element} onChange={this.filterContactList} className="filter_input" type="text" placeholder="Filter"/>

                <List contactList = {this.state.filterContacts} addContactsMethod = {this.addContacts}/>

            </>
        )
    }
}

export default ContactListApp;