import React, {Component} from "react/lib/ReactBaseClasses";
import ReactDOM from 'react-dom';

import {Link} from "react-router-dom";

class Start extends Component {
  constructor() {
    super(...arguments);
  }
  render() {
    return (
      <div className="ui raised segment">
        <ul className="ui list">
          <Link to="/timer">Start</Link>
        </ul>

        <h1>Get Started！</h1>
      </div>
    )
  }
}


export default Start;