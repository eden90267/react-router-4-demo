import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter, Link, Route} from "react-router-dom";


require('Source/less/theme.less');

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = () => (
  <div>
    <h2>Topics</h2>
  </div>
);

ReactDOM.render(
  (
    <BrowserRouter>
      <div className="ui raised segment">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>

        <hr/>

        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>
      </div>
    </BrowserRouter>
  ),
  document.querySelector('#app')
);