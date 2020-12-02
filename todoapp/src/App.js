import Todo from "./Todo";
import React, { Component } from "react";
import Form from "./Components/Form";
import List from "./Components/List";
import LifeCycleEvents from "./Components/LifeCycleEvents";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
      <Router>
        <Header />
        <Route path="/" exact component={Form} />
        <Route path="/list" component={List} />
        <Route path="/life" component={LifeCycleEvents} />
      </Router>
    );
  }
}

export default App;
