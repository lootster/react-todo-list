import React, { Component } from "react";
import ToDoItem from "./ToDoItem";
import ToDoCreationBar from "./ToDoCreationBar";
import TodoFilterBar from "./TodoFilterBar";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.todos,
      filteredToDos: []
    };
  }

  toggleTaskStatus = index => {
    const toggleTrueFalse = [...this.state.todos];
    toggleTrueFalse[index].isCompleted = !toggleTrueFalse[index].isCompleted;
    this.setState({ 
      todos: toggleTrueFalse 
    });
  };

  addTask = (newTask, event) => {
    event.preventDefault();
    const addOnNewtask = [...this.state.todos, newTask];
    this.setState({
      todos: addOnNewtask
    });
  };

  filterTask = (searchValue, event) => {
    event.preventDefault();
    const listOfToDos = [...this.state.todos];
    if (searchValue === null) {
      this.setState({
        filteredToDos: []
      });
    } else {
      const filteredList = listOfToDos.filter(item =>
        item.name.includes(searchValue)
      );
      this.setState({
        filteredToDos: filteredList
      });
    }
  };

  render() {
    const {todos, filteredToDos} = this.state;

    const selectListToDisplay =
      filteredToDos.length > 0 ? filteredToDos : todos;

    const displayToDosList = selectListToDisplay.map((task, index) => {
      return (
        <ToDoItem
          taskName={task.name}
          taskIndex={index}
          taskStatus={task.isCompleted}
          toggleTaskStatus={this.toggleTaskStatus}
        />
      );
    })

    return (
      <div>
        <p>
          <ToDoCreationBar addNewTask={this.addTask} />
        </p>
        <p>
          <TodoFilterBar filter={this.filterTask} />
        </p>
        <ul>
          {displayToDosList}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
