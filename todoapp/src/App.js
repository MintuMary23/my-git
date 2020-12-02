import Todo from "./Todo";
import React, { Component } from "react";
import Form from "./Components/Form";
import List from "./Components/List";
import LifeCycleEvents from "./Components/LifeCycleEvents";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mintu",
      age: "30",
    };
  }

  render() {
    return (
      <div>
        <Todo
          name={this.state.name}
          age={this.state.age}
          st={{ color: "red" }}
        />
        <Form />
        <List />
        <LifeCycleEvents />
      </div>
    );
  }
}

export default App;
