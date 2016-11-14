import React from 'react';
import {render} from 'react-dom';
import App from './App.jsx';
import Aboutus from './temp/reactjs-animation.jsx';
import Contactus from './temp/css-animation.jsx';
import Home from './temp/css-transition.jsx';
import Myfilterapp from './temp/filtersearch.jsx';
import { Router, Route, Link, hashHistory, IndexRoute, IndexLink } from 'react-router';



render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path = "home" component = {Home} />
      <Route path = "about" component = {Aboutus} />
      <Route path = "contact" component = {Contactus} />
    </Route>
  </Router> ,  document.getElementById('app'));
