import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Navlink,
  Switch 
} from "react-router-dom";

import Home from "./Home";
import Projects from './Projects';
import Youtube from './Youtube';


const routing=(
  <Router>
    <div>
      <switch>
        <Route exact path="/" component={Home}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/youtube" component={Youtube}/>
        
       
         </switch>
    </div>
  </Router>
);
ReactDOM.render(routing,document.getElementById("root"));