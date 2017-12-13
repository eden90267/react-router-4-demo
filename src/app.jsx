import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter, Route} from "react-router-dom";
import Index from "Source/components";
import User from "Source/components/User";

require('Source/less/theme.less');

ReactDOM.render(
  (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Index}/>
        <Route path="/user/:name" component={User}/>
      </div>
    </BrowserRouter>
  ),
  document.querySelector('#app')
);