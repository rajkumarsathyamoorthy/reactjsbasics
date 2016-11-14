import React from 'react';

var NavMenu = React.createClass({
        getDefaultProps: function()
        {
            return {
                isOpen: false,
                myClass: false
            };
        },

        render: function()
        {

        var _ulstyle = {
          listStyle: "none",
          width: "250px",
          margin: "0",
          padding: "0",
        }

        var _listyle = {
          textDecoration: "none",
          background: "#232527",
          display: "block",
          padding: "10px",
          color:"#ffffff",
          borderBottom: "1px solid #2a4561"
        }
            if (this.props.isOpen)
            {
                return (
                    <div className="dropdown">
                        <ul style={_ulstyle}>
                            <li style={_listyle}>News</li>
                            <li style={_listyle}>About</li>
                            <li style={_listyle}>Guidelines</li>
                            <li style={_listyle}>Exchange</li>
                            <li style={_listyle}>Forum</li>
                        </ul>
                    </div>
                );
            }
            return null;
        }
    });

    var NavMenuButton = React.createClass({

        getInitialState: function()
        {
            return {
                isOpen: false,
                myClass: false
            };
        },

        handleClick: function(e)
        {
            e.stopPropagation();
            console.log("button click", this.state.isOpen);
            this.setState({
            isOpen: !this.state.isOpen,
            myClass: !this.state.myClass
            });
        },

        componentDidMount: function ()
        {

        },

        componentWillUnmount: function ()
        {

        },

        handleBodyClick: function(e)
        {
               this.setState({
               isOpen: false,
               myClass: false
               });
        },

        render: function()
        {

            var _style = {
                width: "50%",
                float: "left",
                height: "300px",
                position: "relative",
                backgroundColor: "#eaefe3"
            };
            var _style1 = {
                background: "#232527",
                padding: "10px",
                display: "inline-block",
                color: "#fff",
                textDecoration: "none",
                margin: "10px"
            }
            return (
              <div className="clearfix">
                <div style={_style} className={this.state.myClass ? "Open" : "Close"} onClick={this.handleBodyClick}>
                    <button  onClick={this.handleClick}>Menu</button>
                    <NavMenu isOpen={this.state.isOpen} />
                </div>
                <div style={_style} className={this.state.myClass ? "Open" : "Close"} onClick={this.handleBodyClick}>
                    <button  onClick={this.handleClick}>Menu</button>
                    <NavMenu isOpen={this.state.isOpen} />
                </div>
              </div>
            );
        }

    });

export default NavMenuButton;
