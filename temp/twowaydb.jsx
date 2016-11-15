import React from 'react';

var DisplayContainer3 = React.createClass({
	update:function(modifiedValue){
		this.setState({value: modifiedValue});
	},
	getInitialState:function(){
		return{
			value:'My Value'
		}
	},
	render:function(){
		var customValueLink={
			value: this.state.value,
			requestChange: this.update
		};
		return (
			  <div className="badge">
				<h1>Two Way Databinding in React</h1>
				<h4>{this.state.value}</h4>
				<InputBox3 customValueLink={customValueLink} />
			</div>
		);
	}
});

var InputBox3 = React.createClass({
	render:function(){
		return ( <div>
    <input type="text" valueLink={this.props.customValueLink} />
    <input type="text" valueLink={this.props.customValueLink} />
    </div>)
	}
});
export default DisplayContainer3;
