import React from 'react';

export default class Changeit extends React.Component{

  constructor(props){
    super();
    this.state = {
      name: props.myname
    }
  }

  showIt(newname){
    this.setState({
      name: newname
    })

  }
  render(){
    return(
      <div>
        <h1>Hi Change the name {this.state.name}</h1>
        <button onClick={() => this.showIt('Kumar')}>Change it</button>
      </div>
    )
  }
}
