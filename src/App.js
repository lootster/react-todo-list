import React, { Component } from "react";
import ToDoList from './ToDoList';
import { todos } from "./seedData";

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <ToDoList toDoList={todos} />
        </ul>
      </div>
    );
  }
}

export default App;
