import React, {Component} from 'react';
import './List.css';

class Checkbox extends Component {
    constructor() {
        super();
        this.state = {
            isChecked: false
        }
    }

    // handleChange = () => {
    //     this.setState({isChecked: !this.state.isChecked});
    // }

    render() {
        return (
            <>
            <input type="checkbox" checked={this.props.isChecked} />
            </>
        );
    }
}

export default Checkbox;
