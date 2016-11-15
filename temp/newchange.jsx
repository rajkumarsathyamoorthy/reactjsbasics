import React from 'react';

let Kumar = "kumar"
export default class Changeit extends React.Component{

  constructor(props){
    super();
    this.state = {
      name: props.myname
    }
  }

  showIt(newname){
    this.setState({
      name: this.state.name == newname ? this.props.myname : newname
    })

  }
  render(){
    return(
      <div className="badge">
        <h1>Hi Change the name {this.state.name}</h1>
        <button onClick={() => this.showIt(Kumar)}>Change it</button>
      </div>
    )
  }
}
