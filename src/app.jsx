import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter, Route} from "react-router-dom";

require('Source/less/theme.less');

import Home from "Source/components/Home";
import About from "Source/components/About";
import Topics from "Source/components/Topics";

ReactDOM.render(
  (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>
      </div>
    </BrowserRouter>
  ),
  document.querySelector('#app')
);