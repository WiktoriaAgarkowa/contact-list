import React from 'react';
import './List.css';

function List (props) {

    let contacts = props.contactList;

    let contactElement = contacts.map((contact) => <li onClick={(e) => props.checkBox(contact.id, contact)} key={contact.id}>
    <img src={contact.avatar} alt="avatar"/>
    
    {contact.firstName + '  ' + contact.lastName}

    <input type="checkbox" defaultChecked={contact.active} />

    </li>)

    return(
        <>
            <ul>
                {contactElement}
            </ul>
        </>
    )
}

export default List;