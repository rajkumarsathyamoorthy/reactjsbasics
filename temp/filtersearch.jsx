import React from 'react';

export default class Myfilterapp extends React.Component {
    render() {
        return (
            <div className="badge">
                <input type="text"/>
                <ul>
                  {this.props.listy.map((areas) => <li>{areas.areas}</li>)}
                </ul>
            </div>
        )
    }
}
