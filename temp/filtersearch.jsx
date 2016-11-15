import React from 'react';

export default class Myfilterapp extends React.Component {
    render() {
        return (
            <div className="badge">
                <h1>Filter Search in React</h1>
                <input type="text"/>
                <ul>
                  {this.props.listy.map((areas) => <li key={areas.areas}>{areas.areas}</li>)}
                </ul>
            </div>
        )
    }
}
