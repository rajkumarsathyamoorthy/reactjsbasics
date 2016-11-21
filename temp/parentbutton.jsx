import React, { Component } from 'react';
import Button from './childbutton.jsx';

export default class ButtonHeader extends Component {

  constructor() {
    super();
    this.state = {
        headerMsg: false
    }
  }

  changeHeaderState() {
   this.setState({
    headerMsg : this.state.headerMsg ? false : true
   })
  }

  showHeader(){
      if(this.state.headerMsg) {
          return (
              <h1> Header message </h1>
          );
      }
  }

  render() {
    return(
        <div>
            {this.showHeader()}
            <Button showHeader={this.changeHeaderState.bind(this)}/>
        </div>
    );
  }
}
