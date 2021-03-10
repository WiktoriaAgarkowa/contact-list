import React, {Component} from 'react';
import Checkbox from './Checkbox';
import './List.css';

class List extends Component {
    constructor(props) {
        super(props);
    }

    clickItem = (e) => {
        console.log(e.target)
        console.log(this)
        // this.setState({isChecked: !this.state.isChecked})
        // console.log(this.state.isChecked)
    }

    render() {
        return(
            <>
                <ul>
                    {this.props.contactList.map(contact => <li onClick={this.clickItem.bind(this)} key={contact.id}>
                        <img src={contact.avatar} alt="avatar"/>
                        
                        <p>{contact.first_name + '  ' + contact.last_name}</p>

                        {/* <input type="checkbox" defaultChecked = {this.state.isChecked}/> */}

                        <Checkbox />
                    </li>)}
                </ul>
            </>
        )
    }
}

export default List;