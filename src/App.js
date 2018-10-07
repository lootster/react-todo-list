import React, { Component } from "react";
import { todos } from "./seedData";
import ToDoList from "./ToDoList";

class App extends Component {
  render() {
    return (
      <div>
          <ToDoList todos={todos} />
      </div>
    );
  }
}

export default App;
