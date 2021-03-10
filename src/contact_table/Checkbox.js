import React, {Component} from 'react';
import './List.css';

class Chechbox extends Component {
    constructor() {
        super();
        this.state = {
            isChecked: "false"
        }
    }

    render() {
        return (
            <>
            <input type="checkbox" defoultchecked={this.state.isChecked}/>
            </>
        );
    }
}

export default Chechbox;
