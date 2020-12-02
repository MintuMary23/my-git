import React, { Component } from "react";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  onIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <h2>Passing state to prop:</h2>
        <h1>
          <span style={this.props.st}>{this.props.name}</span> is{" "}
          {/* Spacing */}
          <span style={this.props.st}>{this.props.age}</span> years old
        </h1>
        <div>
          <h2>Events:</h2>
          <button onClick={this.onIncrement}>+</button>
          <button onClick={this.onDecrement}>-</button>
          <div>{this.state.counter}</div>
        </div>
      </div>
    );
  }
}
