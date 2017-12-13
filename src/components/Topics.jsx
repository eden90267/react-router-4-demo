import React, {Component} from "react";
import ReactDOM from 'react-dom';
import Links from "Source/components/Links";

class Topics extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    return (
      <div className="ui raised segment">
        <Links />
        <h1>Home</h1>
      </div>
    )
  }
}

export default Topics;