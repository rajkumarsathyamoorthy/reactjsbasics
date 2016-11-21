import React, { Component } from 'react';

export default class Button extends Component {
    constructor() {
        super();
    }

    handleClick() {
        this.props.showHeader(); // execute callback passed over props.
    }

    render() {
        return(
            <div>
                <button onClick={this.handleClick.bind(this)}> Component communication in reactjs </button>
            </div>
        );
    }
}

Button.propTypes = {
    showHeader: React.PropTypes.func
};
