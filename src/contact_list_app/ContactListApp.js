import React, {Component} from 'react';
import './ContactListApp.css';
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

            let contactList =[];

            data.forEach(el => {
                let newContact = {
                    firstName: el.first_name,
                    lastName: el.last_name,
                    id: el.id,
                    avatar: el.avatar,
                    active: false
                }

                contactList.push(newContact);
                
            });

            console.log(contactList)

            contactList.sort(function (a,b) {
                if (a.lastName > b.firstName) {
                    return 1;
                  }
                  if (a.lastName < b.firstName) {
                    return -1;
                  }
                  return 0;
            });

            this.setState({
                contacts: contactList
            }) 

            this.filterContactList();
        })

    }

    clickItem = (id, e) => {

        this.state.contacts.map(contact => {
            if (contact.id === id) {
               contact.active = !contact.active;
               console.log(contact.active)
               console.log(e)
            }
            return contact;
        })
    
    }

    filterContactList = () => {
        this.setState((state) => {
            let newContactList = state.contacts.filter((contact) => {
                return(contact.firstName.includes(this._inputFilter.value) || contact.lastName.includes(this._inputFilter.value));
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

                <List contactList = {this.state.filterContacts} addContactsMethod = {this.addContacts} checkBox={this.clickItem}/>

            </>
        )
    }
}

export default ContactListApp;