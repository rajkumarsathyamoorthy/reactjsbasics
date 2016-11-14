import React from 'react';


export default class Footer extends React.Component{

  constructor(props){
    super();
    this.state ={
     age: props.age,
     status: 0
    }
  }

  olderAge(){
    this.setState({
      age: this.state.age + 3
    })
  }

  resetAge(){
    this.setState({
      age: this.state.age - 3
    })
  }
  render(){
    return(
    <div className="badge">
        <span>{this.props.footertext}</span>
        <p>{this.state.age}</p>
        <button onClick={() => this.olderAge()} className="btns">Add Age</button>
        <button onClick={() => this.resetAge()} className="btns">Reset Age</button>
        <button onClick={this.props.greet} className="btns">Greet</button>
        <ul>
            {this.props.biodata.place.map((place) => <li>{place}</li>)}
        </ul>
    </div>
    )
  }
}
