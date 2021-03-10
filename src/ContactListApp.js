import React, {Component} from 'react';
import './App.css'
import List from './contact_table/List';


class ContactListApp extends Component {
    constructor() {
        super();
        this.state = {
            contacts: []
        }
    }

    componentDidMount() {
        const endpoint = 'https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json';

        fetch(endpoint)
        .then(blob => blob.json())
        .then(data => {
            this.setState({
                contacts: data
            }) 
            console.log(data)
        })
    }

    render() {
        return (
            <>
                <header>
                    <h1>Contacts</h1>
                </header>

                <List contactList = {this.state.contacts}/>

            </>
        )
    }
}

export default ContactListApp;