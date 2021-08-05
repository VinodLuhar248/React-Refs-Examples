import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import CallbackRefExample from "./CallbackRefExample";
import CreateRefApiExample from "./CreateRefApiExample";
import UseRefHookExample from "./UseRefHookExample";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Refs in React"
    };
  }

  render() {
    return (
      <div>
        <h1 class="header">{this.state.name}</h1>
        <div>
          <CallbackRefExample />
          <br />
          <br />
          <CreateRefApiExample />
          <br />
          <br />
          <UseRefHookExample />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
