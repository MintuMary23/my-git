import React, { Component } from "react";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "Mintu",
          age: 30,
        },
        {
          id: 2,
          name: "Meenu",
          age: 20,
        },
      ],
    };
  }
  render() {
    return (
      <div>
          <h2>Looping through List</h2>
        <ul>
            {
                this.state.data.map((item, index) => {
                return <li key={item.id}>{item.name} is {item.age} years old</li>
                })
            }
        </ul>
      </div>
    );
  }
}
