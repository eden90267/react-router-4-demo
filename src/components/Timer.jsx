import React, {Component} from "react/lib/ReactBaseClasses";
import ReactDOM from 'react-dom';
import {Redirect} from "react-router";

class Timer extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      number: 10
    };
  }

  tick = () => {
    if (this.state.number === 0) {
      return;
    }
    this.setState({
      number: this.state.number - 1
    });
  };

  render() {
    if (this.state.number === 0) {
      return (
        <Redirect to={'/timeup'}/>
      );
    }
    return (
      <div className="ui raised segment">
        <h1>{this.state.number}</h1>
      </div>
    )
  }

  componentDidMount() {
    setInterval(this.tick, 1000);
  }
}


export default Timer;