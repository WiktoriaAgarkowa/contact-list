import React, {Component} from 'react';
import './List.css'

class List extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <>
                <ul>
                    {this.props.contactList.map(contact => <li key={contact.id}>
                        <img src={contact.avatar} alt="avatar"/>
                        
                        <p>{contact.first_name + '  ' + contact.last_name}</p>

                        <input type="checkbox" />
                    </li>)}
                </ul>
            </>
        )
    }
}

export default List;