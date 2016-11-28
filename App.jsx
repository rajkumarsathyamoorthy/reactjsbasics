import React from 'react';
import Footer from './temp/footer.jsx';
import Footers from './temp/footers.jsx';
import Changeit from './temp/newchange.jsx';
import Myfilterapp from './temp/filtersearch.jsx';
import NavMenuButton from './temp/toggle.jsx';
import DisplayContainer3 from './temp/twowaydb.jsx';
import ButtonHeader from './temp/parentbutton.jsx';
import { Router, Route, Link, browserHistory, IndexRoute, IndexLink } from 'react-router';

var App = React.createClass({
onAlert() {
 alert("Hello")
},



handleClick: function(e)
{
  e.preventDefault();
  e.stopPropagation();
},
   render() {
   let home = "";

   if(true){
    home = "/home";
   }

   var biodata = {
      name: "Rajkumar",
      age: 27,
      color: "white",
      place: ["vellore", "chennai", "tirupathi"]
   }

   var biodatas = [
   {
      name: "Rajkumar",
      age: 27,
      color: "white"
   },
   {
      name: "Thomas",
      age: 27,
      color: "white"
   },
   {
      name: "Alvin",
      age: 35,
      color: "brown"
   },
   {
      name: "Kaber",
      age: 37,
      color: "moderart"
   }]

   var arealist = [{
    areas: "Poonamalle",
    inner: ["ranipet","arcot","walaja"]
   },{
   areas: "T.Nagar",
     inner: ["ranipet","arcot","walaja"]
   },{
  areas: "Guindy",
    inner: ["ranipet","arcot","walaja"]
   },{
   areas: "Santhome",
     inner: ["ranipet","arcot","walaja"]
   }]

   var libraries = [

       { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
       { name: 'AngularJS', url: 'https://angularjs.org/'},
       { name: 'jQuery', url: 'http://jquery.com/'},
       { name: 'Prototype', url: 'http://www.prototypejs.org/'},
       { name: 'React', url: 'http://facebook.github.io/react/'},
       { name: 'Ember', url: 'http://emberjs.com/'},
       { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
       { name: 'Dojo', url: 'http://dojotoolkit.org/'},
       { name: 'Mootools', url: 'http://mootools.net/'},
       { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
       { name: 'Lodash', url: 'http://lodash.com/'},
       { name: 'Moment', url: 'http://momentjs.com/'},
       { name: 'Express', url: 'http://expressjs.com/'},
       { name: 'Koa', url: 'http://koajs.com/'},

   ]

   var mydata = [
   {
      name: "Rajkumar",
      age: 27,
      color: ["white"]
   },
   {
      name: "Thomas",
      age: 24,
      color: ["white"]
   },
   {
      name: "Alvin",
      age: 35,
      color: ["brown"]
   },
   {
      name: "Kaber",
      age: 37,
      color: ["moderart"]
   }]


      return (
         <div className="raj" onClick={this.doSomething}>
            <ul className="btns">
            <li> <Link to="/home" activeClassName="active">CSS Transitions</Link></li>
            <li> <Link to="/contact" activeClassName="active">CSS Animations</Link></li>
            <li> <Link to="/about" activeClassName="active" >Reactjs-Transition</Link></li>
            </ul>
            <div className="tray clearfix">
              {this.props.children}
            </div>
            <div className="badge">
             <ButtonHeader/>
            </div>
            <NavMenuButton />
            <NavMenuButton />
            <span className="badge">Hello World!!!</span>
            <Footer biodata={biodata} greet={this.onAlert} age={23} footertext={"Copyrighted by Rajkumar 2013"} />
            <Footers biodatas={biodatas} footertext={"Copyrighted by Raji 2013"} />
            <Changeit myname="raj"/>
            <Myfilterapp items={libraries}/>
            <DisplayContainer3/>

         </div>
      );
   }
})

export default App;
