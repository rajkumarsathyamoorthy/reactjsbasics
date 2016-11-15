import React from 'react';



export default class Contactus extends React.Component{

  constructor(){
    super();
    this.state = {
      slide: false,
      flip: false
    }
  }

  onSlide(){
    this.setState({
      slide: this.state.slide ? false : true,
      flip: false
    })
  }

  onFlip(){
    this.setState({
      slide: false,
      flip: this.state.flip ? false : true,
    })
  }

  render(){
    return(
      <div className="aboutus">
          <div className={"animatable-obj "+ (this.state.slide ? "slide" : "") + (this.state.flip ? "flip" : "")}></div>
          <div className="button-group">
            <button onClick={this.onSlide.bind(this)}>Slide</button>
            <button  onClick={this.onFlip.bind(this)}>Flip</button>
          </div>
      </div>
    )
  }
}
