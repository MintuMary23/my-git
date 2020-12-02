import React, { PureComponent } from "react";

export default class LifeCycleEvents extends PureComponent {
  constructor(props) {
    console.log("Inside constructor");
    super(props);
    this.state = {
      counter: 5,
    };
  }

  componentDidMount() {
    console.log("Inside componentDidMount");
  }

  changeValue = () => {
      this.setState({ counter: 10 });
      //this.setState({ counter: this.state.counter + 1 });
  }

  render() {
      console.log(this.state.counter);
    return (
      <div>
        <h2>LifeCycleEvents, PureComponent is used to avoid re-rendering</h2>
        <button onClick={this.changeValue}>Click</button>
      </div>
    );
  }
}
