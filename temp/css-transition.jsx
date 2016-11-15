import React from 'react';

const styles = {
 transition: "all 1s ease-in"
}

export default class Home extends React.Component{

  constructor(){
    super();
    this.state = {
      opacity:1,
      scale:1,
      showhide: "hide"
    }
  }

  onHide(){
    this.setState({
      opacity: this.state.opacity < 1 ? 1 : 0,
      scale: this.state.scale > 1 ? 1 : 1,
      showhide: this.state.showhide === "hide" ? "show" : "hide"
    })
  }

  onScale(){
    this.setState({
      scale: this.state.scale > 1 ? 1 : 1.1
    })
  }

  render(){
    return(
      <div className="aboutus">
          <div style={{...styles, opacity:this.state.opacity, transform: 'scale('+this.state.scale+')'}} className="animatable-obj"></div>
          <div className="button-group">
            <button onClick={this.onScale.bind(this)}>Scale</button>
            <button  onClick={this.onHide.bind(this)}>{this.state.showhide}</button>
          </div>
      </div>
    )
  }
}
