import React, {Component} from "react";
import ReactDOM from 'react-dom';
import Links from "Source/components/Links";

class About extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    return (
      <div className="ui raised segment">
        <Links />
        <h1>About</h1>
      </div>
    )
  }
}

export default About;