import React, {Component} from "react/lib/ReactBaseClasses";
import ReactDOM from 'react-dom';

class TimerUp extends Component {
  constructor() {
    super(...arguments);
  }
  render() {
    return (
      <div className="ui raised segment">
        <h1>Time's Up !!</h1>
      </div>
    )
  }
}


export default TimerUp;