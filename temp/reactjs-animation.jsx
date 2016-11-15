import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const styles={
  transition: "all 1s ease-out"
}
export default class Aboutus extends React.Component{
  constructor(){
    super();
    this.state = {
      items: ['I\'m number 1','I\'m number 2','I\'m number 3'],
      itemnumber: 3
    }
  }

  onAddItem(){
    this.setState({
      itemnumber: this.state.itemnumber + 1,
      items: this.state.items.concat(['I\'m number '+ (this.state.itemnumber + 1)])
    });
  }

  onDeleteItem(id){
      const newItems = this.state.items.slice();
      newItems.splice(id,1);
      this.setState({
        items: newItems
      })
  }

  render(){
    return(
      <div>
          <div className="button-group">
            <button onClick={this.onAddItem.bind(this)}>AddItem</button>
            <ul className="list-items">
            <ReactCSSTransitionGroup
              transitionName="fade"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
              transitionAppear={true}
              transitionAppearTimeout={1000}
            >
              {this.state.items.map((item, i) => {
                return(
                  <li key={item} onClick={this.onDeleteItem.bind(this, i)}>{item}</li>
                )
              })}
              </ReactCSSTransitionGroup>
            </ul>
          </div>
      </div>
    )
  }
}
