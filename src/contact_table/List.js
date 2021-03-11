import React, {Component} from 'react';
import Checkbox from './Checkbox';
import './List.css';

class List extends Component {
    constructor(props) {
        super(props);
    }

    // clickItem = (el) => {
    //     console.log(el);
    //     this.checkboxEl.current.handleChange();
    //     console.log(this.checkboxEl.current);
    // }

    

    render() {
        return(
            <>
                <ul>
                    {this.props.contactList.map((contact) => <li onClick={(e) => this.props.checkBox(contact.id, contact)} key={contact.id}>
                        <img src={contact.avatar} alt="avatar"/>
                        
                        {contact.firstName + '  ' + contact.lastName}

                        <input type="checkbox" defaultChecked={contact.active} />

                    </li>)}
                </ul>
            </>
        )
    }
}

export default List;