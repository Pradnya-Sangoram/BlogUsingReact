import React, { Component } from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import API from "./API";

class Main extends Component {
    
   render() {
    return (
      <HashRouter>
      <div >
        <h1>Assignment 4</h1>
        <ul className="header">
       
        <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/api">API</NavLink></li>
           
        </ul>
        <div className="content">
        <Route exact path="/" component={Home}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/api" component={API}/>
        </div>
      </div>
    </HashRouter>
    );
  } 
}
 
export default Main;